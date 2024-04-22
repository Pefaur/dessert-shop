import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Card,
  HStack,
  VStack,
  AvatarImage,
} from '@gluestack-ui/themed';
import {formatNumber, getInitials} from '../../../utils';

interface OrderListItemProps {
  dessert: {
    strMeal?: string;
    strMealThumb?: string;
    idMeal?: number;
  };
  quantity: number;
}

const OrderListItem: React.FC<OrderListItemProps> = ({dessert, quantity}) => {
  return (
    <Box py={6} px={3}>
      <Card>
        <HStack>
          <Avatar mr="$3">
            <AvatarFallbackText fontFamily="$heading">
              {getInitials(dessert?.strMeal)}
            </AvatarFallbackText>
            {dessert?.strMealThumb && (
              <AvatarImage
                alt={dessert?.strMeal}
                source={{
                  uri: dessert?.strMealThumb,
                }}
              />
            )}
          </Avatar>
          <VStack space="xs">
            <Text
              style={styles.name}>{`${dessert?.strMeal} (${quantity})`}</Text>
            <Text style={styles.price}>
              {formatNumber(dessert?.idMeal * quantity)}
            </Text>
          </VStack>
        </HStack>
      </Card>
    </Box>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default OrderListItem;
