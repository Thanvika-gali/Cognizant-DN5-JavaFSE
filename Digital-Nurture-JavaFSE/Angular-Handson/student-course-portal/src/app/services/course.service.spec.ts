import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CourseService, provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('gets courses from the expected URL', () => {
    service.getCourses().subscribe(courses => expect(courses.length).toBe(2));
    httpMock.expectOne('http://localhost:3000/courses').flush([
      { id: 1, name: 'A', code: 'A1', credits: 3, gradeStatus: 'passed' },
      { id: 2, name: 'B', code: 'B1', credits: 2, gradeStatus: 'pending' }
    ]);
  });

  it('emits the expected error after retry attempts fail', () => {
    service.getCourses().subscribe({ error: error => expect(error.message).toBe('Failed to load courses. Please try again.') });
    for (let attempt = 0; attempt < 3; attempt++) {
      httpMock.expectOne('http://localhost:3000/courses').flush('Server error', { status: 500, statusText: 'Server Error' });
    }
  });
});
