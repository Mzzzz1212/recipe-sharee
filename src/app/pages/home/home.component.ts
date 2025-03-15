import {Component, type OnInit} from "@angular/core"
import {FormControl, ReactiveFormsModule} from "@angular/forms"
import {Router} from "@angular/router"
import {RecipeCardComponent} from "../../components/recipe-card/recipe-card.component"
import {NgFor, NgIf} from "@angular/common"
import {Recipe} from '../../recipe';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ReactiveFormsModule, RecipeCardComponent, NgFor, NgIf],
  template: `
    <div class="container mx-auto px-4 py-8">
      <section class="mb-12 text-center">
        <h2 class="text-3xl font-bold mb-4">Discover Delicious Recipes</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Browse our collection of tasty recipes or share your own creations with the community.
        </p>
      </section>

      <section class="mb-8">
        <div class="max-w-md mx-auto">
          <div class="relative">
            <input
              [formControl]="searchControl"
              type="text"
              placeholder="Search recipes or ingredients..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              (keyup.enter)="search()"
            />
            <button
              (click)="search()"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-1 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-6">
          {{ searchControl.value ? 'Search Results' : 'Popular Recipes' }}
        </h3>

        <div *ngIf="recipes.length === 0" class="text-center py-12">
          <p class="text-gray-500">No recipes found. Try a different search term.</p>
        </div>

        <div *ngIf="recipes.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-recipe-card
            *ngFor="let recipe of recipes"
            [recipe]="recipe"
          ></app-recipe-card>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = []
  searchControl = new FormControl("")

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes
    })
  }

  search(): void {
    const query = this.searchControl.value || ""
    if (query.trim()) {
      this.recipes = this.recipeService.searchRecipes(query)
    } else {
      this.recipeService.getRecipes().subscribe((recipes) => {
        this.recipes = recipes
      })
    }
  }
}

