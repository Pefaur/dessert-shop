import React from 'react';
import {Box, Card, Text, VStack} from '@gluestack-ui/themed';
import {Ingredient} from '../../../types';

const IngredientList: React.FC<{ingredients: Ingredient[]}> = ({
  ingredients,
}) => {
  return (
    <VStack flex={1} space="sm" mt={20}>
      {ingredients.map((ingredient, index) => (
        <Card key={index}>
          <VStack>
            <Text bold>{ingredient.name}</Text>
            <Text>{ingredient.measure}</Text>
          </VStack>
        </Card>
      ))}
    </VStack>
  );
};

export default IngredientList;
