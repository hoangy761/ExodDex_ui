import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from '~/components/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.css';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { Provider } from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MetaMaskProvider
        debug={false}
        sdkOptions={{
            checkInstallationImmediately: false,
            dappMetadata: {
                name: 'Demo React App',
                url: window.location.host,
            },
        }}
    >
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </MetaMaskProvider>,
);
reportWebVitals();
