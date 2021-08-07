import React from 'react';
import Home from './src/scenes/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//Redux
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
const store = createStore(reducers);
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
