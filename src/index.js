import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap JS (for dropdowns, collapse, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
import { LanguageProvider } from './Services/Localization/Localization';
import Store from './Services/Store/Store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* language provider ensures components can access translations and the
          current language. default is Croatian ("hr") and the value is kept in
          sessionStorage under the key "appLang". */}
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
