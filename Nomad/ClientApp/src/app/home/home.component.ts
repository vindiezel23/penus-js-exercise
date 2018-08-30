import { Component } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: boolean[] = [false, false, false, false];
  constructor() { }
  toggleActivate($index:number): void {
    const value = !this.items[$index];
    this.items = _.map(this.items, false);
    this.items[$index] = value;
  }
}
