export default App
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'

import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Notfound from './Components/Notfound/Notfound'
import Payment from './Components/Payment/Payment'
import Cart from './Components/Cart/Cart'
import Productdetails from './Components/Productdetails/Productdetails'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import VerifyCode from './Components/VerifyCode/VerifyCode'
import UpdatePass from './Components/UpdatePass/UpdatePass'
import AuthContextPovider from './Contexts/AuthContextPovider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Category from './Components/Category/Category'
import Brands from './Components/Brands/Brands'



function App() {

  
  let Routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        
        { path: 'ForgetPassword', element: <ForgotPassword /> },
        { path: 'VerifyCode', element: <VerifyCode /> },
        { path: 'UpdatePass', element: <UpdatePass /> },
        { path: 'Categores', element: <Category/> },
        { path: 'Brands', element: <Brands/> },
        { path: 'Signup', element: <Signup /> },
        { path: 'Productdetails/:id', element: <Productdetails /> },
        { path: 'Login', element: <Login /> },
        { path: 'Payment', element: <Payment /> },
        { path: 'Cart', element: <Cart /> },
        { path: '*', element: <Notfound /> },

      ]
    }
  ])

  let client = new QueryClient()

  return (

   <QueryClientProvider client={client}>
    <ReactQueryDevtools></ReactQueryDevtools>
     <AuthContextPovider>
      <RouterProvider router={Routes} />
    </AuthContextPovider>
   </QueryClientProvider>


  )
}


