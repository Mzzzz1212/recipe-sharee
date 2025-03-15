import {Component} from "@angular/core"
import {RouterLink, RouterLinkActive} from "@angular/router"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center">
          <a routerLink="/" class="text-2xl font-bold text-cyan-600">RecipeShare</a>
        </div>
        <nav class="flex items-center space-x-4">
          <a routerLink="/" routerLinkActive="font-bold" [routerLinkActiveOptions]="{exact: true}"
             class="text-sm font-medium">
            Home
          </a>
          <a routerLink="/recipes" routerLinkActive="font-bold" class="text-sm font-medium">
            Recipes
          </a>
          <a routerLink="/add-recipe" routerLinkActive="font-bold"
             class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Add Recipe
          </a>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
}

