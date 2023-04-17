import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from 'react-router-dom';
const CheckoutHeader = () => {
  return (
    <header className='fixed w-full bg-white flex justify-between px-7 md:px-24 py-4 shadow-lg place-items-center'>
           <NavLink to="/">
            <p className="text-3xl font-medium">
              Style<b className="text-red-600 font-bold">Me</b>
            </p>
          </NavLink>
          <NavLink to="/">
          <CloseIcon/>
          </NavLink>
    </header>
  )
}

export default CheckoutHeader