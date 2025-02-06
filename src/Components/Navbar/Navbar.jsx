import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'
import {authContext} from '../../Contexts/AuthContextPovider'

export default function Navbar() {
  let {token}= useContext(authContext)

  
  return (

      <nav className="bg-gray-50 border-gray-200 shadow ">
        <div className="max-w-screen-xl flex flex-wrap items-center  p-4 ">

          <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo}></img>
          </Link>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* {token?:""} */}


           <div className="hidden w-full md:block md:w-auto mx-10" id="navbar-default">
            <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <NavLink to="" className="block py-2 px-3 text-gray-700  rounded md:bg-transparent md:p-0" aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="Cart" className="block py-2 px-3 text-gray-700 rounded md:border-0  md:p-0">Cart</NavLink>
              </li>
              <li>
                <NavLink to="Product" className="block py-2 px-3 text-gray-700 rounded md:border-0  md:p-0 ">Product</NavLink>
              </li>
              <li>
                <NavLink to="Categores" className="block py-2 px-3 text-gray-700 rounded md:border-0  md:p-0 ">Categores</NavLink>
              </li>
              <li>
                <NavLink to="Brands" className="block py-2 px-3 text-gray-700 rounded md:border-0  md:p-0 ">Brands</NavLink>
              </li>
             
            </ul>
          </div> 

          

          <div className="hidden w-full md:block md:w-auto ms-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtub"></i>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>

              {token?<li>
              <button>Logout</button>
              </li> : <>
                <li>
                <NavLink to="Signup" className="block py-2 px-3 text-gray-700 rounded  md:border-0 md:p-0 ">Signup</NavLink>
              </li>
              <li>
                <NavLink to="Login" className="block py-2 px-3 text-gray-700 rounded  md:border-0 md:p-0 ">Login</NavLink>
              </li>
              </> }

             
              
              

            
            </ul>
          </div>
          
        </div>
      </nav>

    
  )
}
