import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrdersScreen from '../features/orders/containers/OrdersScreen';
import {OrdersStackParamList} from './NavigationParams';

const Stack = createNativeStackNavigator<OrdersStackParamList>();

export default function OrderNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
}
