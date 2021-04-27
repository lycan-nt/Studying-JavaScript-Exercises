import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.90,
                code: 'xts95',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 1,
                name: 'Angular Material',
                imageUrl: '/assets/images/http.png',
                price: 50.90,
                code: 'xts95',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 5, 2019'
            }
        ]
    }

}