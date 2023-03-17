import { StatusBar } from 'expo-status-bar';
import { ClickOutsideProvider } from 'react-native-click-outside';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import MainNavigation from './src/navigation/MainNavigation';
import store from './src/redux/store';

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ClickOutsideProvider>
          <MainNavigation />
        </ClickOutsideProvider>
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}
