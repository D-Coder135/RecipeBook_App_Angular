import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameInputRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {

  }
}
