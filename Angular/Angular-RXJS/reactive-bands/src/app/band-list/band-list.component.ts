import { Component } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  bandList: Band[];

  constructor(private bandDataService: BandDataService) {
    const o = interval

    this.bandDataService.getBands().subscribe(bands => {
      this.bandList = bands;
    });
  }
}
