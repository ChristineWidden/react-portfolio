import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import AppRoutes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const basename = import.meta.env.BASE_URL;
// const basename = import.meta.env.DEV ? "/" : "/react-portfolio/";

// React uses this file to inject your entire React app into the actual HTML page.
// This tells React: “Take the <App /> component and put it inside the <div id="root"> in index.html.”
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
// Why BrowserRouter?
// We wrapped <App /> in <BrowserRouter> so that React Router can control which 
// components to display based on the URL (/, /about, etc.).
// Think of it as enabling URL-based navigation without reloading the page.
