import React, {useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {VStack} from '@gluestack-ui/themed';
import {useFocusEffect} from '@react-navigation/native';

interface FormStepProps {
  onChange?: (
    formData: {
      name: string;
      lastName: string;
      address: string;
    },
    isValid: boolean,
  ) => void;
}

const SuccessStep: React.FC<FormStepProps> = () => {
  const animationRef = useRef<LottieView>(null);

  useFocusEffect(() => {
    const startAnimation = () => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    };

    startAnimation();

    return () => animationRef.current?.reset();
  });

  return (
    <View style={styles.container}>
      <VStack space="2xl" style={styles.stackContainer}>
        <VStack space="xs">
          <LottieView
            ref={animationRef}
            source={require('../../../assets/lotties/success.json')}
            loop={false}
            style={styles.lottieAnimation}
          />
          <Text style={styles.title}>¡Compra Realizada con Exito!</Text>
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
    backgroundColor: '#8CBF88',
  },
  stackContainer: {
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  lottieAnimation: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default SuccessStep;
