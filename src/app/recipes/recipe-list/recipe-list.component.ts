import { Component, NgModule, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit  {
  recipes: Recipe[] = [];

  // @Output() recipeDetails: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeService) {
    
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  onRecipeDetailsClicked(recipe: Recipe) {
    // console.log(event);
    // this.recipeDetails.emit(recipe);
    this.recipeService.recipeSelected.emit(recipe);
  }
}
