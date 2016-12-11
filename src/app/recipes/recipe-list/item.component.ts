import { Component, OnInit, Input  } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
@Input() recipe: Recipe;
recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
