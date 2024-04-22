import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Card, Text, VStack} from '@gluestack-ui/themed';
import Animated from 'react-native-reanimated';
import Skeleton from '../../../components/Skeleton';

interface DessertDetailCardProps {
  id: string;
  image: string;
  description: string;
  title: string;
  price: string;
}

const DessertDetailCard: React.FC<DessertDetailCardProps> = ({
  id,
  image,
  description,
  title,
  price,
}) => {
  return (
    <Card style={styles.card}>
      <Animated.Image
        style={styles.image}
        source={{uri: image}}
        alt={`Imagen de ${title}`}
        sharedTransitionTag={`image-${id}`}
      />
      <Box style={styles.box}>
        <VStack space="md">
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : (
            <Skeleton height={20} lines={10} space={2} />
          )}
        </VStack>
      </Box>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    minHeight: 180,
    shadowColor: '#fff',
  },
  image: {
    width: 'auto',
    height: 360,
  },
  box: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
  },
});

export default DessertDetailCard;
