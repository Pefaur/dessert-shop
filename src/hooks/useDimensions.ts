import {useState} from 'react';
import {Dimensions} from 'react-native';

const useScreenDimensions = () => {
  const [screenData] = useState(Dimensions.get('window'));

  return {
    screenWidth: screenData.width,
    screenHeight: screenData.height,
  };
};

export default useScreenDimensions;
