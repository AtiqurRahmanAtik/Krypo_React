import React from 'react';

const FounderMengTeam = () => {

    return (
        <div className='max-w-[540px] lg:container mx-auto my-18 mt-40'>

            <div className='lg:flex gap-2 items-center lg:relative'>
            
              <div class="relative">

            <div class="">
                <img className='hidden lg:block' src="./Assets/Frame 001.png" alt="frame01"/>
            </div>


            {/* <!-- frams --> */}
         
     <div  class="flex gap-1 top-90 left-54 absolute   lg:bottom-18 lg:left-52">
        <div>
            <img  className='border rounded-full'  src="./Assets/Frame 32.png" alt="left"/>
        </div>

        <div>
            <img className='border rounded-full' src="./Assets/Frame 33.png" alt="right"/>
        </div>
    </div>
         

        </div>


            
        {/* <!-- right div --> */}
        <div >
            <h1 class=" py-4 text-2xl lg:mb-28 lg:ml-40 font-bold text-center text-black  lg:py-0">Founder And Management Team</h1>


            {/* <!-- management teams images --> */}
            <div class=" lg:flex gap-2 justify-center items-center lg:absolute bottom-10 left-84"> 

                <div  class="managementHide hidden lg:block">
                    <img className='rounded-2xl' src="./Assets/leftDescribe (3).png" alt="founder"/>
                     <div class="founder">

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p class="founderPosition">Co- Founder & CEO</p>
                    </div>
                </div>

                <div class="managementShow">
                    <img className='rounded-2xl min-w-96 lg:min-w-44  mx-auto' src="./Assets/leftDescribe (2).png" alt="m"/>
                      <div class="managementTitle text-center pt-20 lg:py-0">

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p>Head of BlockChain</p>
                    </div>
                </div>

                <div class="managementHide hidden lg:block">
                    <img className='rounded-2xl' src="./Assets/leftDescribe (1).png" alt="m"/>
                      <div>

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p>Head of BlockChain</p>
                    </div>
                </div>

                <div class="managementHide  hidden lg:block">
                    <img className='rounded-2xl' src="./Assets/leftDescribe.png" alt="m"/>
                      <div>

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p>Head of BlockChain</p>
                    </div>
                </div>
             </div> 
        </div>

       
        </div>

        </div>
    );
};

export default FounderMengTeam;