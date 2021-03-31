import { Component } from '@angular/core';
import { timer, of, Observable } from 'rxjs';

// const source = timer(1000, 2000);
// const subscribe = source.subscribe(val => console.log(val));

// setTimeout(() => { subscribe.unsubscribe(); }, 10000);

const myObservable = of('Felipe', 'Marcella', 'Bryan');

const myObserver = {
  next: (x: string) => console.log('Observer go to a next value: ' + x),
  error: (err: string) => console.error('Observer go to a error: ' + err),
  complete: () => console.log('Observer go to a complete notification'),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor()
  {
    myObservable.subscribe(myObserver);
  }
  title = 'angular-observable-rxjs';
}
