import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from '../navigation/TabNavigator';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
