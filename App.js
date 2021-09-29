import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CollectionsStack from './src/components/CollectionsStack';

const App = () => {

  return (
    <NavigationContainer>
      <CollectionsStack />
    </NavigationContainer>
  );
};

export default App;
