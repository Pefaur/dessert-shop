import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '@gluestack-ui/themed';
import IngredientList from './IngredientList';

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
    fontWeight: '300',
  },
});

export default IngredientSelectionStep;
