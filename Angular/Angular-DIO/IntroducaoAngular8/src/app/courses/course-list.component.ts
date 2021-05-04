import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseServices } from './course.service'

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    constructor(
        private courseServices: CourseServices
    ) {}

    ngOnInit(): void {
        this.courses = this.courseServices.retriveAll();
    }

}