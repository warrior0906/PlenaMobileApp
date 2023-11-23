import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/screens';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
