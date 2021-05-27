import {Component} from '@angular/core';
import {IMenuItem} from '../models/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menuItems: IMenuItem[] = [
    {
      name: 'home',
      url: '#'
    },
    {
      name: 'about',
      url: '#'
    },
    {
      name: 'portfolio',
      url: '#'
    },
    {
      name: 'blog',
      url: '#'
    },
  ];

  constructor() {
  }

}
