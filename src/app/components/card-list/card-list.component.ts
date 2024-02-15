import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  styleBorder = {
    'border': '2px solid #55555599'
  }
  buttonBorder= {
    'border': '1px solid #000000'
  }
}