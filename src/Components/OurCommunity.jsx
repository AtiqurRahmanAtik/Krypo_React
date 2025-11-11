import React from 'react';

const OurCommunity = () => {

  return (

    <div className="container mx-auto my-11 bg-[radial-gradient(circle,rgba(126,97,255,1)_32%,rgba(0,0,0,0.94)_55%)] relative">


        {/* Image */}
           <div class="brandImages">

            <div className='absolute top-46 left-110'>

                <img className="b1 max-w-24" src="./Assets/Bitcoin-1.png" alt="b"/>
            </div>

            <div className='absolute top-58 left-84'>
                <img className="b2  max-w-24" src="./Assets/Bitcoin-1.png" alt="b"/>
            </div>

            <div className='absolute top-56 right-44'>
                <img className="b3  lg:min-w-22" src="./Assets/Ellipse 15.png" alt="b"/>
            </div>

            <div className='absolute top-42 left-50'>
                <img className="b4  lg:min-w-22" src="./Assets/EllipseNew.png" alt="b"/>
            </div>

            <div className='absolute  top-56 left-190'>
                <img className="b5 lg:min-w-22" src="./Assets/EllipseNew.png" alt="b"/>
            </div>

           {/* <div>
                <img className="b5 max-w-22" src="./Assets/Etherium-2.png" alt="b"/>
            </div>  */}


            <div className='absolute '>
                <button className="s1 lg:min-w-40 border border-[#161af2] py-2 bg-black text-white rounded-2xl absolute top-64 left-48 -rotate-20">Facebook</button>
            </div>

            <div className='absolute top-62 left-144 rotate-25'>
                <button className="s2 lg:min-w-40 border border-[#161af2] py-2 bg-black text-white rounded-2xl">Instragram</button>
            </div>

            <div className='absolute top-62 right-70 rotate-25'>
                <button className="s3 lg:min-w-40 border border-[#161af2] py-2 bg-black text-white rounded-2xl">YouTube</button>
            </div>
            
            <div className='absolute top-44 left-74 -rotate-15'>
                <button className="s4 lg:min-w-40 border border-[#161af2] py-2 bg-[#161af2] text-white rounded-2xl">Telegram</button>
            </div>
            
            <div className='absolute top-46 right-60 '>
                <button className="s5 lg:min-w-40 border border-[#161af2] py-2 bg-black text-white rounded-2xl">Medium</button>
            </div>
            
            <div className='absolute top-68 left-106'>
                <button className="s6 lg:min-w-40 border border-[#161af2] py-2 bg-black text-white rounded-2xl">Discord</button>
            </div>

            <div className='absolute top-40 left-134'>
                <button className="s7 lg:min-w-40 border border-[#161af2] py-2 bg-black text-white rounded-2xl">Twitter</button>
            </div>
            
        </div>




      <h1 className="text-3xl pb-60  border-b-1 border-b-white mx-auto lg:max-w-[900px] font-bold text-white text-center py-10 ">
        Our Community
      </h1>


      <div className="lg:flex gap-10  justify-center  ">


    {/* left */}
        <div className="  rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-white  mb-6">Contact Us</h2>

          <form className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              id="name"
              className="w-full text-white text-sm bg-black border border-[#3449ea] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              className="w-full text-white text-sm bg-black border border-[#3449ea] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Number */}
            <input
              type="text"
              placeholder="Enter Your Number"
              name="number"
              id="number"
              className="w-full text-white text-sm bg-black border border-[#3449ea] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Message */}
            <textarea
              name="message"
              id="message"
              cols="52"
              rows="5"
              placeholder="Type Your Message"
              className="w-full text-white text-sm bg-black border border-[#3449ea] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <p className="text-sm text-white">I agree with this</p>
            </div>

            {/* Submit Button */}
            <input
              id="submit"
              type="submit"
              value="Send Message"
              className="min-w-32 bg-[#161af2] text-sm text-white font-normal py-2 rounded-md hover:opacity-90 transition-all cursor-pointer"
            />
          </form>
        </div>



      {/* Right */}

            <div className="ourCommunityRight max-w-md space-y-4">



            <h1 className="text-white  text-xl font-semibold mt-8">What Happens the next depends on what you're looking to do !</h1>



            <div className="Parent lg:relative space-y-6 pl-8 border-l border-white mt-16">
                <div>
                    <p className="border border-white rounded-full min-w-8 text-center text-white p-1 font-semibold lg:absolute -top-8 -left-4 z-10">01</p>

                    <p className='text-white text-sm'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>

                <div>
                    <p className="border border-white bg-[#7e61ff] rounded-full min-w-8 text-center text-white p-1 font-semibold lg:absolute top-14 -left-4 ">02</p>

                    <p className='text-white text-sm'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>

                <div>
                    <p className="border border-white rounded-full min-w-8 text-center text-white p-1 font-semibold  lg:absolute top-42 -left-4">03</p>

                    <p className='text-white text-sm'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>
            </div>
        </div>



      </div>
    </div>
  );
};

export default OurCommunity;
