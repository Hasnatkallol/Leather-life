import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import Cartprovider from './Provider/Cartprovider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Cartprovider>
         <RouterProvider router={router} />
     </Cartprovider>
  </StrictMode>,
)
