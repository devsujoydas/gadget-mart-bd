import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Phones from './Components/Phones/Phones.jsx'
import PhoneDetails from './Components/Phones/PhoneDetails.jsx'
import Payment from './Components/Payment/Payment.jsx'
import { HelmetProvider } from 'react-helmet-async'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/phone",
        element: <Phones />,
        loader: () => fetch('../iphones.json'),
      },
      {
        path: "/phone/:phoneId",
        element: <PhoneDetails />,
        loader: () => fetch('../iphones.json'),
      },
      {
        path: "/payment/:phoneId",
        element: <Payment />,
        loader: () => fetch('../iphones.json'),
      },
      {
        path: "/signin",
        element: <SignIn />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
