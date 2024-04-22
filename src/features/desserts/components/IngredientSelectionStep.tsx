import React from 'react';
import {StyleSheet} from 'react-native';
import IngredientList from './IngredientList';
import {Text, View} from '@gluestack-ui/themed';

const IngredientSelectionStep = ({ingredients}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredientes</Text>
      <IngredientList ingredients={ingredients} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default IngredientSelectionStep;
