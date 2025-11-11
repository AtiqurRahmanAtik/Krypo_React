import React from 'react';
import SingleWhat from './singleWhat';

const WhatDo = () => {

    const WhatDoData =[

        {
            id:1,
            title : "UX review presentations",
            describe : "How do you create compelling presentations that wow ,your colleagues and impress your managers?",
            img : "/public/Assets/Image_1.png"
        },
          {
            id:2,
            title : "UX review presentations",
            describe : "How do you create compelling presentations that wow ,your colleagues and impress your managers?",
            img : "/public/Assets/Image_1.png"
        },
          {
            id:3,
            title : "UX review presentations",
            describe : "How do you create compelling presentations that wow ,your colleagues and impress your managers?",
            img : "/public/Assets/Image_1.png"
        }
    ];





    return (
        <div>
            
       <div className='text-center mt-18'>
         <h2 class="">What we Do</h2>
        <p class="mt-5 mx-auto text-2xl max-w-[800px] text-black">We specialize in harnessing blockchain technology to create secure and transparent solutions for diverse industries, empowering businesses with efficiency and trust.</p>
       </div>




            {/* show card here */}

       <div className='flex gap-4 my-7 justify-center'>
         {
            WhatDoData?.map((item)=> <SingleWhat key={item.id} item={item}></SingleWhat>)
        }
       </div>



{/* 
          <!-- Projects Completed --> */}
            <div class="flex gap-20 my-14 justify-center">
                <div className='text-center'>
                    <h1    className='text-6xl font-extrabold text-[#161AF2] '>15+</h1>
                    <p class="roboto">Years on the market</p>
                </div>
                <div className='text-center'>
                    <h1   className='text-6xl font-extrabold text-[#161AF2] '>1K+</h1>
                    <p  class="roboto">IT professionals</p>
                </div>
                <div className='text-center'>
                    <h1  className='text-6xl font-extrabold text-[#161AF2] '>98%</h1>
                    <p  class="roboto">Returning customers </p>
                </div>
                <div className='text-center'>
                    <h1 className='text-6xl font-extrabold text-[#161AF2] '>110+</h1>
                    <p  class="roboto">Partners worldwide</p>
                </div>


            </div>



        </div>
    );
};

export default WhatDo;