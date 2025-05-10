// config.ts
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const getBaseUrl = () => {
  if (Platform.OS === 'web') {
    return 'http://localhost:3000/api'; // navegador no PC
  }

  const hostUri = Constants.expoConfig?.hostUri || '';
  const ip = hostUri.split(':')[0];
  return `http://${ip}:3000/api`; // app em celular
};

export const BASE_URL = getBaseUrl();
