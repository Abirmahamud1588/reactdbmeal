import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Posts from './Component/Posts/Posts';
import Categorydet from './Component/Categordet/Categorydet';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About> ,
      },
      {
        path: "contact",
        element: <Contact></Contact> ,
      },
      {
        path: "posts",
        element: <Posts></Posts> ,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      },
      {
        path: "post/:catname",
        element: <Categorydet/>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catname}`)
     
      }
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>,
)
