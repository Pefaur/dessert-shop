import * as Keychain from 'react-native-keychain';

class StorageService {
  static async set(key: string, valor: string): Promise<void> {
    try {
      await Keychain.setInternetCredentials(key, key, valor);
    } catch (error) {
      console.error(`Error al guardar valor con clave ${key}:`, error);
    }
  }

  static async get(key: string): Promise<string | null> {
    try {
      const credentials = await Keychain.getInternetCredentials(key);
      if (credentials) {
        return credentials.password;
      }
      return null;
    } catch (error) {
      console.error(`Error al obtener valor con clave ${key}:`, error);
      return null;
    }
  }

  static async remove(key: string): Promise<void> {
    try {
      await Keychain.resetInternetCredentials(key);
    } catch (error) {
      console.error(`Error al eliminar valor con clave ${key}:`, error);
    }
  }
}

export default StorageService;
