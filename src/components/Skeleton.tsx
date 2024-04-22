import React from 'react';
import {Animated, Easing} from 'react-native';

interface SkeletonProps {
  width?: string | number;
  height: string | number;
  lines?: number;
  space?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = 'auto',
  height,
  lines = 1,
  space = 10,
}) => {
  const animatedValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
  ).start();

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#e0e0e0', '#f5f5f5', '#e0e0e0'],
  });

  const skeletonLines = Array.from({length: lines}).map((_, index) => (
    <Animated.View
      key={index}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={4}
      marginTop={index > 0 ? space : 0}
    />
  ));

  return <>{skeletonLines}</>;
};

export default Skeleton;
