import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
// import Home from './Components/Home/Home.jsx';
import User from './Components/User/User.jsx';
import Product from './Components/Product/Product.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'',
        element:<Navigate to={'/user'}></Navigate>
      },
      {
        path:'/user',
        element:<User></User>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/data/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>,
        
      },
      {
        path:'/product',
        element:<Product></Product>,
        loader:()=>fetch('https://api.restful-api.dev/objects')
      },
      {
        path:'/product/:productId',
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`https://api.restful-api.dev/objects/1${params.productId}`)
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
