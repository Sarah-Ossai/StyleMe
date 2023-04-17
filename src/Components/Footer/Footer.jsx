import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 md:flex-row px-7 md:px-24 py-10 bg-black text-white '>
        <div className='flex-1 flex flex-col gap-4' id='about'>
            <p className='font-bold'>ABOUT SHOP</p>
            <hr className='opacity-20'/>
            <p className='text-white text-sm opacity-30 leading-relaxed'>Style Me is a fashion website featuring a curated 
                selection of trending clothing, accessories,
                 and beauty products. Our team of experts scours
                  the web to find the latest styles from established 
                  and emerging designers. Discover new pieces that 
                  match your personal style and stay ahead of the 
                  fashion curve with Shop for Style Me.</p>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
        <p className='font-bold'>INFORMATION</p>
        <hr className='opacity-20'/>
        <ul className='text-white text-sm flex flex-col gap-2'>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Our Services</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Delivery Information</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>About Us</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Terms and Conditions</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Privacy Policy</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Contact Us</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Returns</li>
        </ul>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
        <p className='font-bold'>MY ACCOUNT</p>
        <hr className='opacity-20'/>
        <ul className='text-white text-sm flex flex-col gap-2'>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>My Account</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Order History</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>My Wishlist</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Specials</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Track Order</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>Gift Vouchers</li>
            <li className=' opacity-30 hover:opacity-100 cursor-pointer'>My Credit Slips</li>
        </ul>
        </div>      
        <div className='flex-1 flex flex-col gap-4'>
        <p className='font-bold'>GET IN TOUCH</p>
        <hr className='opacity-20'/>
        <div className='opacity-30 text-sm flex flex-col gap-2'>
           <span>  <HouseIcon/>  Lagos, PO Box 6200 Talay st. 65, StyleMe inc.</span>
          <p>   <CallIcon/>  +234 7013969864</p>
           <p>  <EmailIcon/>  sarahossai6@gmail.com</p>
        </div>
        <p className='font-bold'>FIND US ON</p>
        <div className='flex  gap-2 text-sm text-white'>
            <FacebookIcon className='cursor-pointer opacity-30 hover:opacity-100'/>
            <InstagramIcon className='cursor-pointer opacity-30 hover:opacity-100'/>
            <TwitterIcon className='cursor-pointer opacity-30 hover:opacity-100'/>
            <LinkedInIcon className='cursor-pointer opacity-30 hover:opacity-100'/>
        </div>
        </div>
    </footer>
    )
}

export default Footer