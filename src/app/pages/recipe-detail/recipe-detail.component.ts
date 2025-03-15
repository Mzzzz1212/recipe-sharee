import {Component, OnInit} from "@angular/core"
import {NgFor, NgIf} from "@angular/common"
import {Recipe} from '../../recipe';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: "app-recipe-detail",
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="container mx-auto px-4 py-8">
      <a routerLink="/recipes" class="inline-flex items-center text-sm mb-6 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Back to Recipes
      </a>

      <div *ngIf="recipe" class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="relative h-[300px] md:h-[400px]">
          <img
            [src]="recipe.image || 'assets/images/placeholder.jpg'"
            [alt]="recipe.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-6 md:p-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              *ngFor="let tag of recipe.tags"
              class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
            >
              {{ tag }}
            </span>
          </div>

          <h1 class="text-3xl font-bold mb-2">{{ recipe.title }}</h1>

          <p class="text-gray-500 mb-6">{{ recipe.description }}</p>

          <div class="flex gap-6 mb-8">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ recipe.cookTime }} mins</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>Serves {{ recipe.servings }}</span>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-xl font-semibold mb-4">Ingredients</h2>
              <ul class="space-y-2">
                <li *ngFor="let ingredient of recipe.ingredients" class="flex items-start">
                  <span class="inline-block h-1.5 w-1.5 rounded-full bg-cyan-600 mt-2 mr-2"></span>
                  {{ ingredient }}
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-semibold mb-4">Instructions</h2>
              <ol class="space-y-4">
                <li *ngFor="let instruction of recipe.instructions; let i = index" class="flex">
                  <span class="font-medium text-cyan-600 mr-2">{{ i + 1 }}.</span>
                  <span>{{ instruction }}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="!recipe" class="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold mb-4">Recipe not found</h1>
        <button
          (click)="router.navigate(['/'])"
          class="bg-cyan-600 text-white px-4 py-2 rounded-md"
        >
          Return to Home
        </button>
      </div>
    </div>
  `,
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id")
      if (id) {
        this.recipe = this.recipeService.getRecipeById(id)
      }
    })
  }
}

