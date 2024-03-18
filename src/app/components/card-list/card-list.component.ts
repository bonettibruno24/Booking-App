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
  dayweek = [
    { days: 'Seg', hours: 'Fechado'},
    { days: 'Ter', hours: '09:00 as 17:00'},
    { days: 'Quar', hours: '09:00 as 19:00'},
    { days: 'Qui', hours: '08:00 as 20:00'},
    { days: 'Sex', hours: '08:00 as 20:00'},
    { days: 'Sab', hours: '08:00 as 19:00'},
    { days: 'Dom', hours: 'Fechado'},
  ];
  services = [
    {services: 'Alongamento', price: 'R$ 30'}, 
    {services: 'Esmaltação', price: 'R$ 40'}, 
    {services: 'Alongamento', price: 'R$ 38'}, 
    {services: 'Alongamento', price: 'R$ 42'}, 
  ]
      
    



  }
  
