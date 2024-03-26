import { Component, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProject';
}
@Injectable({
  providedIn: 'root'
})
export class GlobalBorderImplements {
  BorderSimple = {
    'border': '2px solid #55555599'
  };

  buttonBorder = {
    'border': '1px solid #000000'
  };

  constructor() { }
}
