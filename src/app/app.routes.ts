import type {Routes} from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "recipes",
    loadComponent: () => import("./pages/recipe-list/recipe-list.component").then((m) => m.RecipeListComponent),
  },
  {
    path: "recipes/:id",
    loadComponent: () => import("./pages/recipe-detail/recipe-detail.component").then((m) => m.RecipeDetailComponent),
  },
  {
    path: "add-recipe",
    loadComponent: () => import("./pages/add-recipe/add-recipe.component").then((m) => m.AddRecipeComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]

