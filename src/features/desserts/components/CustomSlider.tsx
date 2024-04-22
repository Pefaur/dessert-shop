import React, {useRef, useState, useEffect, FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  BackHandler,
  View,
  Keyboard,
} from 'react-native';
import {
  ArrowRightIcon,
  Box,
  Text,
  ScrollView,
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
} from '@gluestack-ui/themed';

const {width} = Dimensions.get('window');

interface CustomSliderProps {
  components: React.ReactNode[];
  onComplete: () => void;
  stepsCompletionStatus?: boolean[];
  endAnimationComponent?: React.ReactNode;
}

const CustomSlider: FC<CustomSliderProps> = ({
  components,
  onComplete,
  stepsCompletionStatus = Array(components.length).fill(true),
  endAnimationComponent,
}) => {
  const scrollViewRef = useRef<React.ElementRef<typeof ScrollView>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSteps = components.length;
  const showFooter: boolean = totalSteps > currentIndex;

  const goToNextComponent = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < components.length) {
      scrollViewRef.current?.scrollTo({x: width * nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    } else if (nextIndex === components.length) {
      onComplete();
      Keyboard.dismiss();
      if (endAnimationComponent) {
        scrollViewRef.current?.scrollTo({x: width * nextIndex, animated: true});
        setCurrentIndex(nextIndex);
      }
    }
  };

  const goToPreviousComponent = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      scrollViewRef.current?.scrollTo({
        x: width * previousIndex,
        animated: true,
      });
      setCurrentIndex(previousIndex);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      goToPreviousComponent,
    );

    return () => backHandler.remove();
  }, [currentIndex, components.length]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollViewHorizontal}>
        {components.map((Component, index) => (
          <ScrollView
            key={index}
            style={styles.scrollViewVertical}
            contentContainerStyle={styles.contentContainer}
            scrollEnabled={true}>
            {Component}
          </ScrollView>
        ))}
        {endAnimationComponent && (
          <View style={styles.scrollViewVertical}>{endAnimationComponent}</View>
        )}
      </ScrollView>
      {showFooter ? (
        <Box
          backgroundColor="white"
          px={20}
          py={20}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          hardShadow="1">
          <HStack justifyContent="space-between" alignItems="center">
            <Text>{`Paso ${currentIndex + 1}/${totalSteps}`}</Text>
            <Button
              opacity={
                currentIndex < components.length &&
                stepsCompletionStatus[currentIndex]
                  ? 1
                  : 0.5
              }
              disabled={
                currentIndex < components.length
                  ? !stepsCompletionStatus[currentIndex]
                  : false
              }
              size="xl"
              borderRadius={25}
              height={50}
              onPress={goToNextComponent}>
              <ButtonIcon as={ArrowRightIcon} mr="$2" />
              <ButtonText fontWeight="200">
                {currentIndex === totalSteps - 1 ? 'Pagar' : 'Continuar'}
              </ButtonText>
            </Button>
          </HStack>
        </Box>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewHorizontal: {
    flex: 1,
  },
  scrollViewVertical: {
    width,
    height: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default CustomSlider;
