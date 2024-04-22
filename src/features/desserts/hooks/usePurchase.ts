import {useState} from 'react';
import {Alert} from 'react-native';
import StorageService from '../../../services/StorageService';
import {Purchase} from '../../../types';

const usePurchase = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const addProductToCart = async (product: Purchase) => {
    setLoading(true);
    try {
      await StorageService.set('cart', JSON.stringify(product));
    } catch (e) {
      Alert.alert('Error', 'No se pudo agregar el producto al carrito');
    } finally {
      setLoading(false);
    }
  };

  const getCart = async () => {
    try {
      const cartStr = await StorageService.get('cart');
      return cartStr ? JSON.parse(cartStr) : null;
    } catch (e) {
      Alert.alert('Error', 'No se pudo obtener el carrito');
    }
  };

  const completePurchase = async (newPurchase: Purchase) => {
    setLoading(true);
    try {
      const purchasesStr = await StorageService.get('purchases');
      const purchases: Purchase[] = purchasesStr
        ? JSON.parse(purchasesStr)
        : [];
      await StorageService.set(
        'purchases',
        JSON.stringify([newPurchase, ...purchases]),
      );
    } catch (e) {
      Alert.alert('Error', 'No se pudo realizar la compra');
    } finally {
      setLoading(false);
    }
  };

  const getPurchaseHistory = async () => {
    try {
      const purchasesStr = await StorageService.get('purchases');
      return purchasesStr ? JSON.parse(purchasesStr) : [];
    } catch (e) {
      Alert.alert('Error', 'No se pudo obtener el historial de compras');
    }
  };

  return {completePurchase, addProductToCart, getCart, getPurchaseHistory, loading};
};

export default usePurchase;
