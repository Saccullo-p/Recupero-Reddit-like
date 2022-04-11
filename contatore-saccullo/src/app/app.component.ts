import { Component } from '@angular/core';
import { Numbers } from './numbers.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatore-saccullo';
  numbers:Numbers[];
  constructor(){
    this.numbers = [];
  }
  addNum(num: HTMLInputElement): boolean{
    this.numbers.push();
    
    return false;
  }
}
