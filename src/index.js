import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';

const elem = document.querySelector('#root');
const root = ReactDOM.createRoot(elem);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
