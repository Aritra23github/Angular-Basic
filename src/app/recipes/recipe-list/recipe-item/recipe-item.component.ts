import { AfterContentInit, Component, Input, ElementRef } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements AfterContentInit {
  @Input() recipe:Recipe;

  // @Output() recipeDetails:EventEmitter<void> = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  ngAfterContentInit() {
    console.log(this.recipe);
  }

  showDetailedRecipes() {
    // this.recipeDetails.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
