import {useEffect, useState} from 'react';
import {DessertDetail, ErrorResponse} from '../../../types';
import DessertService from '../../../services/DessertService';
import { Alert } from 'react-native';

const useDessertDetail = (id: string) => {
  const [dessertDetail, setDessertDetail] = useState<DessertDetail>(
    {} as DessertDetail,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const getDessertById = async (_id: string) => {
    setLoading(true);
    try {
      const data = await DessertService.getDessertById(_id);
      setDessertDetail(data);
    } catch (catchError) {
      setError(catchError as ErrorResponse);
      Alert.alert('Error', 'No se pudo obtener el detalle del postre');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDessertById(id);
  }, []);

  return {dessertDetail, loading, error, quantity, setQuantity};
};

export default useDessertDetail;
