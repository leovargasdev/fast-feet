import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar, YellowBox} from 'react-native';

import './config/ReactotronConfig';
import {store, persistor} from './store';
import Routes from './routes';

YellowBox.ignoreWarnings(['Failed prop type']);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
