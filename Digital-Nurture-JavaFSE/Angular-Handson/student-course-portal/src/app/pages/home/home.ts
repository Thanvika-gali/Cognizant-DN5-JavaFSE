import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Store } from '@ngrx/store';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  searchTerm = '';

  message = '';

  stats = [
    { title: 'Courses Available', value: 0 },
    { title: 'Enrolled', value: 0 },
    { title: 'GPA', value: 3.8 }
  ];

  private readonly store = inject(Store);
  constructor(private readonly courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => this.stats[0].value = courses.length);
    this.store.select(selectEnrolledIds).subscribe(courseIds => this.stats[1].value = courseIds.length);
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

}
