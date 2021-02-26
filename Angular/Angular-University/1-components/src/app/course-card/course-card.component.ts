import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course; 

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner']
    }
  }

  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  onViewCourse() {
    console.log("Button card-component clicked...");

    this.courseSelected.emit(this.course);
  }

}
