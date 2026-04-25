import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <Home />
    </>,
  },
  {
    path: "/about",
    element: <>
      <Navbar />
      <About />
    </>,
  },
  {
    path: "/dashboard",
    element: <>
      <Navbar />
      <Dashboard />
    </>,
  },
  {
    path: "/student/:id",
    element: <>
      <Navbar />
      <ParamComp />
    </>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}



export default App
