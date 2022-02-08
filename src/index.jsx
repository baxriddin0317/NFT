import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './Component/Context/Context';
import { ProstaProvider } from './Component/Context/ProstaContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ModalProvider >
          <ProstaProvider>
            <App />
          </ProstaProvider>
        </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

