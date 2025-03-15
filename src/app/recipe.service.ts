import {Injectable} from "@angular/core"
import {BehaviorSubject, type Observable} from "rxjs"
import {Recipe} from './recipe';

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
      image: "assets/images/carbonara.jpg",
      cookTime: 25,
      servings: 4,
      ingredients: [
        "350g spaghetti",
        "150g pancetta or guanciale, diced",
        "3 large eggs",
        "50g pecorino cheese, grated",
        "50g parmesan cheese, grated",
        "Freshly ground black pepper",
        "Salt to taste",
      ],
      instructions: [
        "Bring a large pot of salted water to boil and cook spaghetti according to package instructions.",
        "While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy.",
        "In a bowl, whisk together eggs, grated cheeses, and black pepper.",
        "Drain pasta, reserving 1/2 cup of pasta water.",
        "Working quickly, add hot pasta to the skillet with pancetta, remove from heat.",
        "Add the egg and cheese mixture, tossing continuously until creamy.",
        "Add pasta water as needed to create a silky sauce.",
        "Serve immediately with extra grated cheese and black pepper.",
      ],
      tags: ["Italian", "Pasta", "Quick"],
    },
    {
      id: "2",
      title: "Vegetable Stir Fry",
      description: "A quick and healthy vegetable stir fry with a savory sauce.",
      image: "assets/images/stir-fry.jpg",
      cookTime: 15,
      servings: 2,
      ingredients: [
        "2 tbsp vegetable oil",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "1 cup broccoli florets",
        "1 cup snap peas",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 tsp honey",
        "Sesame seeds for garnish",
      ],
      instructions: [
        "Heat oil in a wok or large skillet over high heat.",
        "Add garlic and ginger, stir for 30 seconds until fragrant.",
        "Add vegetables, starting with the ones that take longer to cook (carrots, broccoli).",
        "Stir fry for 3-4 minutes until vegetables begin to soften.",
        "Add snap peas and bell pepper, cook for another 2 minutes.",
        "In a small bowl, mix soy sauce, sesame oil, and honey.",
        "Pour sauce over vegetables and toss to coat.",
        "Cook for another minute until sauce is slightly thickened.",
        "Garnish with sesame seeds and serve over rice if desired.",
      ],
      tags: ["Vegetarian", "Healthy", "Quick"],
    },
    {
      id: "3",
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies with a soft center and crispy edges.",
      image: "assets/images/cookies.jpg",
      cookTime: 30,
      servings: 24,
      ingredients: [
        "225g unsalted butter, softened",
        "200g brown sugar",
        "100g granulated sugar",
        "2 large eggs",
        "1 tsp vanilla extract",
        "280g all-purpose flour",
        "1 tsp baking soda",
        "1/2 tsp salt",
        "300g chocolate chips",
        "100g chopped walnuts (optional)",
      ],
      instructions: [
        "Preheat oven to 350°F (175°C) and line baking sheets with parchment paper.",
        "In a large bowl, cream together butter and both sugars until light and fluffy.",
        "Beat in eggs one at a time, then stir in vanilla.",
        "In a separate bowl, combine flour, baking soda, and salt.",
        "Gradually add dry ingredients to the wet mixture and mix until just combined.",
        "Fold in chocolate chips and walnuts if using.",
        "Drop rounded tablespoons of dough onto prepared baking sheets.",
        "Bake for 10-12 minutes until edges are golden but centers are still soft.",
        "Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack.",
      ],
      tags: ["Dessert", "Baking", "Cookies"],
    },
    {
      id: "4",
      title: "Chicken Curry",
      description: "A flavorful and aromatic chicken curry that's perfect for a comforting dinner.",
      image: "assets/images/curry.jpg",
      cookTime: 45,
      servings: 4,
      ingredients: [
        "500g chicken thighs, cut into pieces",
        "2 tbsp vegetable oil",
        "1 large onion, finely chopped",
        "3 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tbsp curry powder",
        "1 tsp ground cumin",
        "1 tsp ground coriander",
        "1/2 tsp turmeric",
        "1 can (400ml) coconut milk",
        "1 cup chicken stock",
        "2 tomatoes, diced",
        "Fresh cilantro for garnish",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Heat oil in a large pot over medium heat.",
        "Add onions and cook until softened, about 5 minutes.",
        "Add garlic and ginger, cook for another minute until fragrant.",
        "Add all the spices and stir for 30 seconds to toast them.",
        "Add chicken pieces and cook until they start to brown, about 5 minutes.",
        "Pour in coconut milk and chicken stock, bring to a simmer.",
        "Add diced tomatoes and simmer for 20-25 minutes until chicken is cooked through and sauce thickens.",
        "Season with salt and pepper to taste.",
        "Garnish with fresh cilantro and serve with rice or naan bread.",
      ],
      tags: ["Indian", "Spicy", "Main Course"],
    },
    {
      id: "5",
      title: "Greek Salad",
      description: "A refreshing Mediterranean salad with crisp vegetables and tangy feta cheese.",
      image: "assets/images/greek-salad.jpg",
      cookTime: 15,
      servings: 4,
      ingredients: [
        "1 cucumber, diced",
        "4 large tomatoes, cut into chunks",
        "1 red onion, thinly sliced",
        "1 green bell pepper, diced",
        "200g feta cheese, cubed",
        "100g kalamata olives",
        "2 tbsp extra virgin olive oil",
        "1 tbsp red wine vinegar",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a large bowl, combine cucumber, tomatoes, red onion, and bell pepper.",
        "Add olives and feta cheese cubes.",
        "In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.",
        "Pour dressing over the salad and toss gently to combine.",
        "Let sit for 10 minutes before serving to allow flavors to meld.",
        "Serve chilled as a side dish or light meal.",
      ],
      tags: ["Greek", "Salad", "Vegetarian"],
    },
    {
      id: "6",
      title: "Beef Tacos",
      description: "Delicious homemade beef tacos with all the fixings.",
      image: "assets/images/tacos.jpg",
      cookTime: 30,
      servings: 4,
      ingredients: [
        "500g ground beef",
        "1 onion, finely diced",
        "2 cloves garlic, minced",
        "2 tbsp taco seasoning",
        "8 taco shells or small tortillas",
        "1 cup lettuce, shredded",
        "1 cup tomatoes, diced",
        "1/2 cup cheddar cheese, grated",
        "1/4 cup sour cream",
        "Hot sauce to taste",
        "Fresh cilantro for garnish",
      ],
      instructions: [
        "Heat a large skillet over medium-high heat.",
        "Add ground beef and cook until browned, breaking it up as it cooks.",
        "Add diced onion and cook until softened, about 3 minutes.",
        "Add garlic and cook for another minute.",
        "Stir in taco seasoning and 1/4 cup of water, simmer for 5 minutes.",
        "Warm taco shells or tortillas according to package instructions.",
        "Assemble tacos by filling shells with beef mixture.",
        "Top with lettuce, tomatoes, cheese, sour cream, and cilantro.",
        "Serve with hot sauce on the side.",
      ],
      tags: ["Mexican", "Beef", "Quick"],
    },
  ]

  private recipesSubject = new BehaviorSubject<Recipe[]>(this.recipes)

  constructor() {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.recipesSubject.asObservable()
  }

  getRecipeById(id: string): Recipe | undefined {
    return this.recipes.find((recipe) => recipe.id === id)
  }

  searchRecipes(query: string): Recipe[] {
    if (!query || query.trim() === "") {
      return this.recipes
    }

    query = query.toLowerCase().trim()

    return this.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query)) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(query)),
    )
  }

  addRecipe(recipe: Omit<Recipe, "id">): void {
    const newRecipe: Recipe = {
      ...recipe,
      id: (this.recipes.length + 1).toString(),
    }

    this.recipes = [...this.recipes, newRecipe]
    this.recipesSubject.next(this.recipes)
  }
}

