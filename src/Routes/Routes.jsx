import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Mainlayout from "../Layout/Mainlayout";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Errorpage from "../Components/Errorpage";
import Spinner from "../Components/Spinner";
import Home from "../Components/Home";
import Details from "../Components/Details";


 export const router = createBrowserRouter([
    {
      path: "/",
      Component:Mainlayout,
      errorElement: Errorpage,
      children:[

        { 
             index: true,
             Component: Home,
             loader:() => fetch('../products.json'),
             hydrateFallbackElement: <Spinner></Spinner>,       
        },
        { 
            path: "about",
            Component: About,
            hydrateFallbackElement: <Spinner></Spinner>,       
       },
       { 
        path: 'contact',
        Component: Contact,
        hydrateFallbackElement: <Spinner></Spinner>,       
   },
   { 
    path: "details/:id",
    loader:() => fetch('../products.json'),
    Component: Details,
    hydrateFallbackElement: <Spinner></Spinner>,       
},

      ]
    },
  ]);