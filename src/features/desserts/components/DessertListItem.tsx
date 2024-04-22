import React from 'react';
import {Dimensions} from 'react-native';
import {Card, Pressable, Text} from '@gluestack-ui/themed';
import Animated from 'react-native-reanimated';
import {Dessert} from '../../../types';
import {formatNumber} from '../../../utils';

interface DessertListItemProps {
  dessert: Dessert;
  onSelect: (dessert: Dessert) => void;
}

const DessertListItem: React.FC<DessertListItemProps> = ({
  dessert,
  onSelect,
}) => {
  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 2 - 24;

  return (
    <Pressable onPress={() => onSelect(dessert)}>
      <Card
        p={0}
        borderRadius="$lg"
        mx="$1.5"
        my={'$2.5'}
        minHeight={180}
        shadowColor="#fff">
        <Animated.Image
          width={itemWidth}
          height={itemWidth}
          borderRadius={20}
          source={{
            uri: dessert.strMealThumb,
          }}
          alt={`Imagen de ${dessert.strMeal}`}
          sharedTransitionTag={`image-${dessert.idMeal}`}
        />
        <Text
          fontSize={15}
          fontWeight="$light"
          fontFamily="$heading"
          my="$1"
          maxWidth={itemWidth}
          numberOfLines={2}>
          {dessert.strMeal}
        </Text>
        <Text fontSize={13} bold>
          {formatNumber(dessert.idMeal)}
        </Text>
      </Card>
    </Pressable>
  );
};

export default DessertListItem;
