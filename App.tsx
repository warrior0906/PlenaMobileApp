import React from 'react';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import Router from './src/screens/router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
