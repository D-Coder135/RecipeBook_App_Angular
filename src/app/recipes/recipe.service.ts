import { EventEmitter } from "@angular/core";
import {Recipe} from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe.',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg', [])
  ];


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
