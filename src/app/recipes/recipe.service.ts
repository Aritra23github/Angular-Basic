import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [ 
        new Recipe(
            "A Test Recipe", 
            "This is a Test 1 Recipe", 
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg",
            [
                new Ingredient("Test Ingredient", 5)
            ]
        ),
        new Recipe(
            "Another Test Recipe", 
            "This is a Test 2 Recipe", 
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg",
            [
                new Ingredient("Another Test Ingredient", 3)
            ]
        )
    ];

    getRecipe() {
        return this.recipes;
    }
}