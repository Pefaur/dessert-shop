import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from '@gluestack-ui/themed';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DessertList from '../components/DessertList';
import useDesserts from '../hooks/useDessert';
import {Dessert} from '../../../types';
import {DessertStackParamList} from '../../../navigation/NavigationParams';

const DessertsScreen: React.FC = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DessertStackParamList>>();
  const {desserts, loading, error} = useDesserts();

  const onSelect = (dessert: Dessert) => navigate('DessertDetail', {dessert});

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error al cargar los postres: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Postres</Text>
      </View>
      <DessertList desserts={desserts} onSelect={onSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  titleContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000',
  },
});

export default DessertsScreen;
