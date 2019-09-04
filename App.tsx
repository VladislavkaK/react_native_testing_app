import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { AppNavigator } from './src/navigation';

const store = configureStore(); 

const App = () => {
  return (
    <Provider store={store} >
        <AppNavigator />
    </Provider>
  );
};

export default App;
