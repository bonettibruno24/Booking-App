import { Component } from '@angular/core';
import { GlobalBorderImplements } from 'src/app/app.component';


@Component({
  selector: 'app-galery',
  templateUrl: './galery-ph.component.html',
  styleUrls: ['./galery-ph.component.scss']
})
export class GaleryPhComponent {
  constructor(public BorderOnly: GlobalBorderImplements) { }

}
