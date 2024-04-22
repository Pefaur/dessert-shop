import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Dessert} from '../../../types';
import DessertListItem from './DessertListItem';
import ListEmpty from './ListEmpty';

interface DessertListProps {
  desserts: Dessert[];
  onSelect: (dessert: Dessert) => void;
}

const DessertList: React.FC<DessertListProps> = ({desserts, onSelect}) => {
  return (
    <FlatList
      data={desserts}
      renderItem={({item}) => (
        <DessertListItem dessert={item} onSelect={onSelect} />
      )}
      keyExtractor={item => item.idMeal}
      contentContainerStyle={styles.contentList}
      ListEmptyComponent={
        <ListEmpty
          message={'No hay postres disponibles'}
          imagePath={require('../../../assets/images/cake-empty.jpg')}
        />
      }
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  contentList: {
    flexGrow: 1,
  },
});

export default DessertList;
