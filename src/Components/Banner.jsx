

const Banner = () => {

    return (
        <div className="container mx-auto mt-20">
            
            <div>
                   <h1 class=" text-7xl font-bold text-black">Building Trust , <br />One block at a <br /> Time</h1>

       
        <p className="my-4">  Whether you're just getting started or scaling your next big </p>



           <div class="flex gap-6 my-6">
            <button class="py-1 px-6 mr-4 bg-[#161AF2] border-none text-white rounded-lg">Contact Us</button>


            <div className="flex gap-2 items-center">
                <img src="/public/Assets/play1.png" alt="play"/>

                <button class="">Watch Our Journey</button>                                                          
            </div>


        </div>


            </div>




            {/* right  */}

            <div className="rightHero max-w-[420px] max-h-[150px] border border-[#7E61FF] rounded-2xl p-5 lg:ml-[820px] lg:-mt-18">
                 <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque id nihil assumenda consequuntur harum, veritatis consectetur doloribus accusantium velit ipsum.</p>
            </div>
             
        </div>
    );
};

export default Banner;