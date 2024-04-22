export interface Dessert {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Ingredient {
  name: string;
  measure: string;
}

export interface DessertDetail {
  category: string;
  instructions: string;
  ingredients: Ingredient[];
}

export interface DessertResponse {
  meals: Dessert[];
}

export interface DessertDetailResponse {
  meals: DessertDetail[];
}

export interface Purchase {
  dessert: Dessert;
  dessertDetail: DessertDetail;
  quantity: number;
}

export interface ErrorResponse {
  codeError: string;
  message: string;
}
