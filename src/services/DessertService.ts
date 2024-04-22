import {AxiosError} from 'axios';
import api from './api';
import {
  Dessert,
  DessertDetail,
  DessertDetailResponse,
  DessertResponse,
  ErrorResponse,
} from '../types';
import {convertMealsToDessertDetails} from '../utils';

const dessertURI = '/1/filter.php?c=Dessert';
const dessertDetailURI = '/1/lookup.php?i=';

export default class DessertService {
  static async getDesserts(): Promise<Dessert[]> {
    try {
      const {
        data: {meals},
      } = await api.get<DessertResponse>(dessertURI);
      return meals || [];
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      return Promise.reject({
        code: axiosError?.response?.data?.codeError || 'GENERIC_ERROR',
        message: axiosError?.message || 'Ocurrió un error desconocido',
      });
    }
  }

  static async getDessertById(id: string): Promise<DessertDetail> {
    try {
      const {
        data: {meals},
      } = await api.get<DessertDetailResponse>(`${dessertDetailURI}${id}`);
      if (meals && meals.length > 0) {
        const data = convertMealsToDessertDetails(meals);
        return data[0];
      } else {
        return Promise.reject({
          codeError: 'NOT_FOUND',
          message: 'No se encontraron detalles del postre.',
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      return Promise.reject({
        codeError: axiosError?.response?.data?.codeError || 'GENERIC_ERROR',
        message: axiosError?.message || 'Ocurrió un error desconocido',
      });
    }
  }
}
