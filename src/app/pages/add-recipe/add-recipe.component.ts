import {Component} from "@angular/core"
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router, RouterLink} from "@angular/router"
import {NgFor} from "@angular/common"
import {RecipeService} from '../../recipe.service';

@Component({
  selector: "app-add-recipe",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgFor],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <a routerLink="/" class="inline-flex items-center text-sm mb-6 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>

        <div class="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 class="text-2xl font-bold mb-6">Add New Recipe</h1>

          <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="title" class="block text-sm font-medium text-gray-700">Recipe Title</label>
                <input
                  id="title"
                  formControlName="title"
                  type="text"
                  placeholder="Enter recipe title"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
              </div>

              <div class="space-y-2">
                <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  id="image"
                  formControlName="image"
                  type="text"
                  placeholder="Enter image URL"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                formControlName="description"
                placeholder="Briefly describe your recipe"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent min-h-[100px]"
                required
              ></textarea>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="cookTime" class="block text-sm font-medium text-gray-700">Cook Time (minutes)</label>
                <input
                  id="cookTime"
                  formControlName="cookTime"
                  type="number"
                  min="1"
                  placeholder="30"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
              </div>

              <div class="space-y-2">
                <label for="servings" class="block text-sm font-medium text-gray-700">Servings</label>
                <input
                  id="servings"
                  formControlName="servings"
                  type="number"
                  min="1"
                  placeholder="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div formArrayName="ingredients" class="space-y-4">
              <div class="flex items-center justify-between">
                <label class="block text-sm font-medium text-gray-700">Ingredients</label>
                <button
                  type="button"
                  (click)="addIngredient()"
                  class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-600-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                  Add Ingredient
                </button>
              </div>

              <div *ngFor="let ingredient of ingredients.controls; let i = index" class="flex gap-2">
                <input
                  [formControlName]="i"
                  type="text"
                  placeholder="Ingredient {{i + 1}}"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  (click)="removeIngredient(i)"
                  [disabled]="ingredients.length === 1"
                  class="p-2 text-gray-500 hover:text-red-500 disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>

            <div formArrayName="instructions" class="space-y-4">
              <div class="flex items-center justify-between">
                <label class="block text-sm font-medium text-gray-700">Instructions</label>
                <button
                  type="button"
                  (click)="addInstruction()"
                  class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-600-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                  Add Step
                </button>
              </div>

              <div *ngFor="let instruction of instructions.controls; let i = index" class="flex gap-2">
                <textarea
                  [formControlName]="i"
                  placeholder="Step {{i + 1}}"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                ></textarea>
                <button
                  type="button"
                  (click)="removeInstruction(i)"
                  [disabled]="instructions.length === 1"
                  class="p-2 text-gray-500 hover:text-red-500 disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>

            <div formArrayName="tags" class="space-y-4">
              <div class="flex items-center justify-between">
                <label class="block text-sm font-medium text-gray-700">Tags</label>
                <button
                  type="button"
                  (click)="addTag()"
                  class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-600-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                  Add Tag
                </button>
              </div>

              <div *ngFor="let tag of tags.controls; let i = index" class="flex gap-2">
                <input
                  [formControlName]="i"
                  type="text"
                  placeholder="Tag {{i + 1}} (e.g., Vegetarian, Italian, Quick)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  (click)="removeTag(i)"
                  [disabled]="tags.length === 1"
                  class="p-2 text-gray-500 hover:text-red-500 disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex justify-end gap-4">
              <button
                type="button"
                (click)="router.navigate(['/'])"
                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="recipeForm.invalid"
                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-600-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 disabled:opacity-50"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class AddRecipeComponent {
  recipeForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    public router: Router,
  ) {
    this.recipeForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      image: ["assets/images/placeholder.jpg"],
      cookTime: [30, [Validators.required, Validators.min(1)]],
      servings: [4, [Validators.required, Validators.min(1)]],
      ingredients: this.fb.array([this.fb.control("", Validators.required)]),
      instructions: this.fb.array([this.fb.control("", Validators.required)]),
      tags: this.fb.array([this.fb.control("", Validators.required)]),
    })
  }

  get ingredients() {
    return this.recipeForm.get("ingredients") as FormArray
  }

  get instructions() {
    return this.recipeForm.get("instructions") as FormArray
  }

  get tags() {
    return this.recipeForm.get("tags") as FormArray
  }

  addIngredient() {
    this.ingredients.push(this.fb.control("", Validators.required))
  }

  removeIngredient(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index)
    }
  }

  addInstruction() {
    this.instructions.push(this.fb.control("", Validators.required))
  }

  removeInstruction(index: number) {
    if (this.instructions.length > 1) {
      this.instructions.removeAt(index)
    }
  }

  addTag() {
    this.tags.push(this.fb.control("", Validators.required))
  }

  removeTag(index: number) {
    if (this.tags.length > 1) {
      this.tags.removeAt(index)
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe(this.recipeForm.value)
      alert("Recipe submitted successfully!")
      this.router.navigate(["/"])
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.recipeForm.controls).forEach((key) => {
        const control = this.recipeForm.get(key)
        control?.markAsTouched()
      })
    }
  }
}

