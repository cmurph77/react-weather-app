import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import WeatherPage from './pages/WeatherPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/weather",
    element: <WeatherPage></WeatherPage>
  },
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/maps",
    element: <MapPage></MapPage>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
