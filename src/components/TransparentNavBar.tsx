import React from 'react';
import {Box, StatusBar} from '@gluestack-ui/themed';

const TransparentNavBar = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        zIndex={1}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height={38}
        backgroundColor="#000"
        opacity={0.2}
      />
    </>
  );
};

export default TransparentNavBar;
