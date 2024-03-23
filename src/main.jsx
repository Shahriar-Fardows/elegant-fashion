import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root';
import Home from './Home/Home';
import Login from './Log/Login';
import CardInfo from './Components/CardInfo/CardInfo';
import Context from './Context/Context';
import Admin from './Components/Admin/Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/cardInfo/:id",
        element: <CardInfo />,
        loader: ({params}) => fetch(`http://localhost:5000/cardInfo/${params.id}`),
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
    </React.StrictMode>,
  </div>
)
