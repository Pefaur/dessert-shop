import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DessertsScreen from '../features/desserts/containers/DessertsScreen';
import DessertDetailScreen from '../features/desserts/containers/DessertDetailScreen';
import {DessertStackParamList} from './NavigationParams';
import PurchaseProcessScreen from '../features/desserts/containers/PurchaseProcessScreen';

const Stack = createNativeStackNavigator<DessertStackParamList>();

export default function DessertNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Desserts" component={DessertsScreen} />
      <Stack.Screen name="DessertDetail" component={DessertDetailScreen} />
      <Stack.Screen name="PurchaseProcess" component={PurchaseProcessScreen} />
    </Stack.Navigator>
  );
}
