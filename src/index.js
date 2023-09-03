import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /**
   * Here's what the BrowserRouter component does and how it's used:
   * ##Enables Routing:
   * The main purpose of the BrowserRouter component is to enable client-side routing. It listens to changes in the URL and renders
   * the appropriate components based on the defined routes.
   * 
   * ##Route Matching:
   * The BrowserRouter uses the concept of routes. A route is a mapping between a specific URL path and a React component that should 
   * be rendered when the URL matches that path. The Route component from react-router-dom is used to define these mappings.
   * 
   * ##Rendering Components:
   * When the URL changes, the BrowserRouter scans through the defined routes and renders the component associated with the matched route.
   * This allows for dynamic rendering of components based on the URL without having to request new pages from the server.
   */
);
reportWebVitals();
//second