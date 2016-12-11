import { Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient'

@Injectable()
export class ShoppingListService {
  private items: Ingridient[] = []
    
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingridient[]) {
    // Equivalent to loop to items and push them to this.items
    Array.prototype.push.apply(this.items, items);
  }

/*  items: Ingridient[] = [
    new Ingridient("coliflower", 3),
    new Ingridient("pollo", 5),
    new Ingridient("queso", 2),
    new Ingridient("tomato", 12)
  ];
*/

}
