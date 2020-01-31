import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public serchValue = '';

  @Output() searchText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeSearch(): void {
    this.searchText.emit(this.serchValue);
    debugger
  }

}
