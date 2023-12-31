import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/addAToy',
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-cars-server-rust.vercel.app/addToy/${params.id}`)
        },
        {
          path: '/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/updateToy/:id',
          element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-cars-server-rust.vercel.app/addToy/${params.id}`)
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    }
  ]);
  
  export default router;