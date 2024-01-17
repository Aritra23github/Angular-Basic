import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {
    ingredientAdd = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient("Test Ingredient", 20),
        new Ingredient("Apple", 20),
    ];

    getIngredient() {
        return this.ingredients;
    }

    insertIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}