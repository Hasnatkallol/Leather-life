import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Errorpage from "../Components/Errorpage";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component:Mainlayout,
      errorElement: Errorpage,
      children:[

        { 
             index: true,
             Component: Home,
            //  hydrateFallbackElement: <Spinner></Spinner>,       
        },
        { 
            path: "about",
            Component: About,
           //  hydrateFallbackElement: <Spinner></Spinner>,       
       },
       { 
        path: 'contact',
        Component: Contact,
       //  hydrateFallbackElement: <Spinner></Spinner>,       
   },

      ]
    },
  ]);