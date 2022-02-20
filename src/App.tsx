import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { SubscriptionModal } from './components/SubscriptionModal';
import { theme } from './global/theme';
import { SettingsScreen } from './screens/SettingsScreen';
import store from './stores';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SettingsScreen />
                <SubscriptionModal />
            </ThemeProvider>
        </Provider>
    );
};