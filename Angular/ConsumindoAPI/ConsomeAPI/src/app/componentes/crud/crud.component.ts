import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeHolder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  Imagens: any;
  err: any;

  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit(): void {
  }

  getter() {
    this.crudService.getFotos().subscribe(
        (data: Images) => {
          this.Imagens = data;
          console.log(this.Imagens);
        },
        err => {
          this.err = err;
          console.log(this.err);
        }
      )
  }

}
