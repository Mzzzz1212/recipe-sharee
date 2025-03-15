import {Component, Input} from "@angular/core"
import {RouterLink} from "@angular/router"
import {Recipe} from '../../recipe';
import {NgForOf} from '@angular/common';

@Component({
  selector: "app-recipe-card",
  standalone: true,
  imports: [RouterLink, NgForOf],
  template: `
    <a [routerLink]="['/recipes', recipe.id]" class="block h-full">
      <div class="bg-white rounded-lg shadow-sm overflow-hidden h-full transition-all hover:shadow-md">
        <div class="aspect-video relative overflow-hidden">
          <img
            [src]="recipe.image || 'assets/images/placeholder.jpg'"
            [alt]="recipe.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-bold text-lg truncate">{{ recipe.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2 mt-1">
            <span
              *ngFor="let tag of recipe.tags.slice(0, 3)"
              class="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-600"
            >
              {{ tag }}
            </span>
          </div>
          <p class="text-gray-500 text-sm mt-2 line-clamp-2">
            {{ recipe.description }}
          </p>
          <div class="text-xs text-gray-500 flex gap-4 mt-4">
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ recipe.cookTime }} mins</span>
            </div>
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>Serves {{ recipe.servings }}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe
}

