import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'NextLevel Angular!'
  }

  angularClick() {
    alert('Angular click')
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

}
  
