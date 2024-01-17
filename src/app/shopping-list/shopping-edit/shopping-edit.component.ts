import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {

  @ViewChild('nameInput') name: ElementRef;

  @ViewChild('amountInput') amount: ElementRef;

  // @Output() ingredient = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingService) {}

  add(event: Event) {
    event.preventDefault();
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;

    const newIng = new Ingredient(ingName, ingAmount);

    // this.ingredient.emit(newIng);
    // this.shoppingService.ingredientAdd.emit(newIng);

    this.shoppingService.insertIngredient(newIng);
  }
}
