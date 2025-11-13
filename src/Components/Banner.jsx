

const Banner = () => {

    return (
        <div className="max-w-[540px] lg:max-w-[1160px] mx-auto mt-26">
            
            <div>
                   <h1 class="text-6xl lg:text-7xl font-bold text-black ">Building Trust , <br />One block at a <br /> Time</h1>

       
        <p className="mt-8 text-gray-600 font-semibold">  Whether you're just getting started or scaling your next big </p>



           <div class="flex gap-6 my-4">
            <button class="py-1 px-6 mr-4 bg-[#161AF2] border-none text-white rounded-lg">Contact Us</button>


            <div className="flex gap-2 items-center">
                <img src="/public/Assets/play1.png" alt="play"/>

                <button class="text-gray-600 text-sm font-semibold">Watch Our Journey</button>                                                          
            </div>


        </div>


            </div>




            {/* right  */}

            <div className=".rightHero mt-16 sm:mt-0 lg:mx-auto bg-gray-600 text-white   max-w-[420px] max-h-[150px] border border-[#7E61FF] rounded-2xl p-5 lg:ml-[820px] lg:-mt-18">
                 <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque id nihil assumenda consequuntur harum, veritatis consectetur doloribus accusantium velit ipsum.</p>
            </div>
             
        </div>
    );
};

export default Banner;