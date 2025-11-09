import React from 'react';
import { NavLink } from 'react-router';


const NavigationBar = () => {


    return (
        <div className=' navbar rounded-full border-[#161AF2] container mx-auto mt-4 py-4'>
       
            {/* Navbar */}
            <nav className='flex justify-between w-full items-center'>
                <div className='flex gap-0.5 items-center ml-4'>
                    <img src="/public/Assets/Logo (2).png" alt="krypo" />

                    <h1>Krypo</h1>
                </div>


                {/* Center */}
                <div>
                    <ul className='flex gap-8 justify-between'>
                       <NavLink to="/">  <li>Home</li></NavLink>
                      <NavLink to='/aboutUs'><li>About Us</li> </NavLink>  
                        <li>Listings</li>
                        <li>Blog</li>
                        <li>Contacts Us</li>
                    </ul>
                </div>

                
                {/* End */}
                <div className='flex gap-4 items-center'>
                    <div>
                        <p>English</p>
                    </div>
                    <button className='py-1 px-3 mr-4 bg-[#161AF2] border-none rounded-lg'>Get a Quote</button>
                </div>
            </nav>



         
           


        </div>
    );
};

export default NavigationBar;