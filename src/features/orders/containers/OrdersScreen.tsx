import React, {useCallback, useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Card,
  HStack,
  VStack,
  AvatarImage,
} from '@gluestack-ui/themed';
import usePurchase from '../../desserts/hooks/usePurchase';
import {formatNumber, getInitials} from '../../../utils';
import ListEmpty from '../../desserts/components/ListEmpty';

const OrdersScreen: React.FC = () => {
  const {getPurchaseHistory} = usePurchase();
  const [orders, setOrders] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const data = await getPurchaseHistory();
        setOrders(data);
      })();
    }, []),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Pedidos</Text>
      <FlatList
        contentContainerStyle={styles.contentList}
        ListEmptyComponent={
          <ListEmpty
            message={'No hay pedidos realizados'}
            imagePath={require('../../../assets/images/cake-empty.jpg')}
          />
        }
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: {dessert, quantity}}) => (
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
                    style={
                      styles.name
                    }>{`${dessert?.strMeal} (${quantity})`}</Text>
                  <Text style={styles.price}>
                    {formatNumber(dessert?.idMeal * quantity)}
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </Box>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  stackContainer: {
    paddingTop: 20,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000',
    paddingHorizontal: 5,
  },
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
  contentList: {
    flexGrow: 1,
  },
});

export default OrdersScreen;
