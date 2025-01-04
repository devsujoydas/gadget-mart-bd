import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Phones from './Components/Phones/Phones.jsx'
import PhoneDetails from './Components/Phones/PhoneDetails.jsx'
import Payment from './Components/Payment/Payment.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/phone",
        element:<Phones/>,
        loader: ()=> fetch('../iphones.json'),
      },
      {
        path:"/phone/:phoneId",
        element:<PhoneDetails/>,
        loader: ()=> fetch('../iphones.json'),
      },
      {
        path:"/payment",
        element:<Payment/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
