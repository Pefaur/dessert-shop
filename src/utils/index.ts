import {DessertDetail, Ingredient} from '../types';

export const formatNumber = (value: number | bigint | string) => {
  const number = typeof value === 'string' ? parseFloat(value) : value;
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(number);
};

export const convertMealsToDessertDetails = (meals: any[]): DessertDetail[] => {
  return meals.map(meal => {
    const ingredients: Ingredient[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientName = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (
        ingredientName &&
        measure &&
        ingredientName.trim() !== '' &&
        measure.trim() !== ''
      ) {
        ingredients.push({name: ingredientName, measure});
      }
    }

    return {
      category: meal.strCategory,
      instructions: meal.strInstructions,
      ingredients,
    };
  });
};

export const getInitials = (str: string) => {
  const words = str.split(' ');
  if (words.length > 1) {
    return words
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  }
  return str.slice(0, 2).toUpperCase();
};

export const delay = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
