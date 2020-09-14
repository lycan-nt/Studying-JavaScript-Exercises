import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = "My Application NgIF || NgFor || NgClass"
  title = 'NgIfFor';
  numeros: number[] = [1];

  isGreen: boolean = true;

  cash: number = 1.99;

  date = new Date();
}
