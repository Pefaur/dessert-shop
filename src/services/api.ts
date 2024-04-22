import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.URL_API,
});

export default api;
