import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RecipeListComponent} from './pages/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './pages/recipe-detail/recipe-detail.component';
import {AddRecipeComponent} from './pages/add-recipe/add-recipe.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "recipes",
    component: RecipeListComponent,
  },
  {
    path: "recipe/:id",
    component: RecipeDetailComponent,
    providers: [
      {
        provide: 'ngRouteProcessorPrerender',
        useValue: false,
      }
    ]
  },
  {
    path: "add-recipe",
    component: AddRecipeComponent,
  },
  {
    path: "**",
    redirectTo: "**"
  }
];
