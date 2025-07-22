import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// React uses this file to inject your entire React app into the actual HTML page.
// This tells React: “Take the <App /> component and put it inside the <div id="root"> in index.html.”
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// Why BrowserRouter?
// We wrapped <App /> in <BrowserRouter> so that React Router can control which 
// components to display based on the URL (/, /about, etc.).
// Think of it as enabling URL-based navigation without reloading the page.
