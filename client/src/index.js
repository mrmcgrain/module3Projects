import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MyProvider } from "../src/projects/calculator/Utilities/context-hook"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MyProvider>

    <App />
    </MyProvider>

    </BrowserRouter>
  </React.StrictMode>
);
