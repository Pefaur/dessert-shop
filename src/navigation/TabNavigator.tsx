import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import DessertNavigator from './DessertNavigator';
import OrderNavigator from './OrderNavigator';
import {
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import CheckoutNavigator from './CheckoutNavigator';

const Tab = createBottomTabNavigator();

const globalScreenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}): BottomTabNavigationOptions => {
  const hiddenScreens = ['PurchaseProcess', 'CheckoutSteps', 'DessertDetail'];
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';

  return {
    headerShown: false,
    tabBarIcon: () => null,
    tabBarLabel: titles[route.name],
    tabBarLabelStyle: {
      marginBottom: 15,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#000',
    },
    tabBarStyle: {
      display: hiddenScreens.includes(routeName) ? 'none' : 'flex',
    },
  };
};

const titles = {
  Dessert: 'Postres',
  Order: 'Mis Pedidos',
};

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={globalScreenOptions}>
      <Tab.Screen name="Dessert" component={DessertNavigator} />
      <Tab.Screen name="Order" component={OrderNavigator} />
    </Tab.Navigator>
  );
}
