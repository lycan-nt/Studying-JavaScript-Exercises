import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  imagens: Images;
  error: any;

  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit(): void {
  }

  getter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.imagens = data;
        console.log(this.imagens);
        console.log(data);
      },
      error => {
        this.error = error;
        console.log(error);
      }
    )
  }

}
