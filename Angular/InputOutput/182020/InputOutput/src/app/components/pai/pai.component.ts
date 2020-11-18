import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {
@Output() informacao = "Nome: Felipe D. Santos";
  constructor() { }

  ngOnInit(): void {
  }

}
