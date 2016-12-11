import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingridient } from '../shared/ingridient'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Coliflower", "Colifolower Pie", "http://nutrawiki.org/wp-content/uploads/2015/09/Cauliflower.jpg", [
        new Ingridient("coliflower", 3),
        new Ingridient("Sugar", 5),
        new Ingridient("Milk", 2)
    ]),
    new Recipe("Tomaquets", "Tomaquet i Mozzarella", "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg", [
        new Ingridient("Tomato", 12),
        new Ingridient("Mozzarella", 7),
        new Ingridient("Salt", 12)
    ]),
    new Recipe("Polo Con Patatas", "Pollo con patatas, i mes", "https://rsbackend.blob.core.windows.net/product/Pollo%20allo%20spiedo_8d008ce39178621.jpg", [
        new Ingridient("Pollo", 1),
        new Ingridient("Patatas", 12),
        new Ingridient("Salt", 4),
        new Ingridient("Oil", 1)
    ])
  ];
  constructor() { }

  getRecipies() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

}
