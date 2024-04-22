import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {Image, Heading, View} from '@gluestack-ui/themed';

interface ListEmptyProps {
  message: string;
  imagePath: ImageSourcePropType;
}

const ListEmpty: React.FC<ListEmptyProps> = ({message, imagePath}) => {
  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} alt={message} />
      <Heading style={styles.heading}>{message}</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    aspectRatio: 1,
  },
  heading: {
    marginTop: 16,
    fontWeight: '300',
  },
});

export default ListEmpty;
