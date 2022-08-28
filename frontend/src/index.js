import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import LoginComponent from './Container/UserContainer/LoginComponent/LoginComponent';
import RegisterComponent from './Container/UserContainer/RegisterComponent/RegisterComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  // <LoginComponent></LoginComponent>
  <RegisterComponent></RegisterComponent>
);

