import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </Router>
  </React.StrictMode>
);