import {
  Box,
  FormControl,
  Input,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

interface FormStepProps {
  onChange?: (
    formData: {
      name: string;
      lastName: string;
      address: string;
    },
    isvalid: boolean,
  ) => void;
}

const FormStep: React.FC<FormStepProps> = ({onChange}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = () => {
    const isvalid = !!(name && lastName && address);
    onChange?.({name, lastName, address}, isvalid);
  };

  useEffect(() => {
    handleChange();
  }, [name, lastName, address]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos de Envio</Text>

      <VStack space="2xl" style={styles.stackContainer}>
        <VStack space="xs">
          <Input variant="underlined" size="md">
            <InputField
              value={name}
              onChangeText={setName}
              placeholder="Ingresa Nombre"
            />
          </Input>
        </VStack>

        <VStack space="xs">
          <Input variant="underlined" size="md">
            <InputField
              value={lastName}
              onChangeText={setLastName}
              placeholder="Ingresa Apellido"
            />
          </Input>
        </VStack>

        <VStack space="xs">
          <Input variant="underlined" size="md">
            <InputField
              value={address}
              onChangeText={setAddress}
              placeholder="Ingresa Dirección"
            />
          </Input>
        </VStack>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
    width: '100%',
    height: '100%',
  },
  stackContainer: {
    paddingTop: 20,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FormStep;
