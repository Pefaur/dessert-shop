import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetVirtualizedList,
  Text,
} from '@gluestack-ui/themed';
import {Ingredient} from '../../../types';

const IngredientActionSheet: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  ingredients: Ingredient[];
}> = ({isVisible, onClose, ingredients}) => {
  const getItemCount = data => data.length;
  const getItem = (data, index) => data[index];

  return (
    <Actionsheet isOpen={isVisible} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent style={styles.actionsheetContent} maxHeight="75%">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <Text style={styles.title}>Ingredientes</Text>
        <ActionsheetVirtualizedList
          data={ingredients}
          initialNumToRender={5}
          renderItem={({item}) => (
            <ActionsheetItem style={styles.itemContainer}>
              <ActionsheetItemText>{item.name}</ActionsheetItemText>
              <ActionsheetItemText>{item.measure}</ActionsheetItemText>
            </ActionsheetItem>
          )}
          keyExtractor={(item, i) => item.name + i}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

const styles = StyleSheet.create({
  actionsheetContent: {
    zIndex: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IngredientActionSheet;
