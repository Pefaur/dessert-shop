import {useEffect, useState} from 'react';
import {Dessert, ErrorResponse} from '../../../types';
import DessertService from '../../../services/DessertService';

export default function useDesserts() {
  const [desserts, setDesserts] = useState<Dessert[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  const getDesserts = async () => {
    setLoading(true);
    try {
      const data = await DessertService.getDesserts();
      setDesserts(data || []);
    } catch (catchError) {
      setError(catchError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDesserts();
  }, []);

  return {desserts, loading, error};
}
