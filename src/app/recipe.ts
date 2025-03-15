export interface Recipe {
  id: string
  title: string
  description: string
  image: string
  cookTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  tags: string[]
}
