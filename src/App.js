/**
 * React Native App
 */
import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import configureStore from './redux/configureStore';
const { persistor, store } = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <Navigator />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;