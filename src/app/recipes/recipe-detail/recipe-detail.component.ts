import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeDetails: Recipe;

  constructor(private shoppingService: ShoppingService) {}

  goToShoppingList() {
    this.recipeDetails.ingredients.map(ingredient => {
      const newIng = new Ingredient(ingredient.name, ingredient.amount);

      this.shoppingService.insertIngredient(newIng);
    });
  }
}
