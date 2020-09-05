import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Images } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: any;
  error: any;

  constructor(private cruServices: CrudService) { 
    this.getter();
  }

  ngOnInit(): void {
  }

  getter() {
    this.cruServices.getFotos().subscribe(
    (data: Images) => {
      this.images = data;
      
      console.log(this.images);
      console.log(`This is Data ${data}`);

    }, 

    error => {
      this.error = error;
      console.log(error);
    });
  }

}
