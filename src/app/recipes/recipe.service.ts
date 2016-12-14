import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Coliflower", "Colifolower Pie", "http://nutrawiki.org/wp-content/uploads/2015/09/Cauliflower.jpg", [
        new Ingredient("coliflower", 3),
        new Ingredient("Sugar", 5),
        new Ingredient("Milk", 2)
    ]),
    new Recipe("Tomaquets", "Tomaquet i Mozzarella", "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg", [
        new Ingredient("Tomato", 12),
        new Ingredient("Mozzarella", 7),
        new Ingredient("Salt", 12)
    ]),
    new Recipe("Pollo Con Patatas", "Pollo con patatas, i mes", "https://rsbackend.blob.core.windows.net/product/Pollo%20allo%20spiedo_8d008ce39178621.jpg", [
        new Ingredient("Pollo", 1),
        new Ingredient("Patatas", 12),
        new Ingredient("Salt", 4),
        new Ingredient("Oil", 1)
    ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }
  
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }

}
