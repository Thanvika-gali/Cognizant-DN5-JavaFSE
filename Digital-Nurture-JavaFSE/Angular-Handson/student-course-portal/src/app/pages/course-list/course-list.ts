import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { EnrollmentService } from '../../services/enrollment.service';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({ selector: 'app-course-list', standalone: true, imports: [CommonModule, FormsModule, CourseCardComponent], templateUrl: './course-list.html', styleUrl: './course-list.css' })
export class CourseListComponent implements OnInit {
  private readonly store = inject(Store);
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  isLoading$ = this.store.select(selectCoursesLoading);
  errorMessage$ = this.store.select(selectCoursesError);
  selectedCourseId?: number;
  private readonly selectedCourse = new Subject<number>();
  searchTerm = '';
  constructor(private readonly enrollmentService: EnrollmentService, private readonly router: Router, private readonly route: ActivatedRoute) {}
  ngOnInit(): void { this.store.dispatch(loadCourses()); this.route.queryParamMap.subscribe(params => { this.searchTerm = params.get('search') ?? ''; }); this.selectedCourse.pipe(switchMap(id => this.enrollmentService.getStudentsByCourse(id))).subscribe(); } // switchMap cancels a prior selected-course request.
  trackByCourseId(_: number, course: Course): number { return course.id; } // Prevents Angular from recreating unchanged cards.
  updateSearch(): void { this.router.navigate(['courses'], { queryParams: { search: this.searchTerm || null } }); }
  onEnroll(courseId: number): void { console.log('Enrolling in course: ' + courseId); this.selectedCourseId = courseId; this.selectedCourse.next(courseId); }
}
