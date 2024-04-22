import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Button, Text} from '@gluestack-ui/themed';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <Box style={styles.container}>
      <Button onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Button>
      <Text style={styles.quantityText}>{quantity}</Text>
      <Button onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 0.3,
    borderColor: '#999',
    width: 50,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    padding: 0,
    fontWeight: '400',
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default QuantitySelector;
