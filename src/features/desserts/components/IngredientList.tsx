import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, HStack, Text, VStack} from '@gluestack-ui/themed';
import {Ingredient} from '../../../types';

const IngredientList: React.FC<{ingredients: Ingredient[]}> = ({
  ingredients,
}) => {
  return (
    <VStack flex={1} space="sm" mt={20}>
      {ingredients.map((ingredient, index) => (
        <Card key={index}>
          <HStack space="md" style={styles.hStack}>
            <Text style={styles.ingredientName}>{ingredient.name}</Text>
            <Text>{ingredient.measure}</Text>
          </HStack>
        </Card>
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  hStack: {
    justifyContent: 'space-between',
  },
  ingredientName: {
    fontWeight: '300',
  },
});

export default IngredientList;
