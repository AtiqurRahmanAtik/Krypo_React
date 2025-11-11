import React from 'react';

const FounderMengTeam = () => {

    return (
        <div className='my-18 mt-40'>

            <div className='lg:flex gap-2 items-center lg:relative'>
            
              <div class="lg:relative">

            <div class="">
                <img src="./Assets/Frame 001.png" alt="frame01"/>
            </div>


            {/* <!-- frams --> */}
         
     <div  class="flex gap-1 lg:absolute bottom-18 left-52">
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
            <h1 class="  text-2xl lg:mb-28 lg:ml-40 font-bold text-center text-black">Founder And Management Team</h1>


            {/* <!-- management teams images --> */}
            <div class="hidden lg:flex gap-2 justify-center items-center lg:absolute bottom-10 left-84"> 

                <div  class="managementHide">
                    <img className='rounded-2xl' src="./Assets/leftDescribe (3).png" alt="founder"/>
                     <div class="founder">

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p class="founderPosition">Co- Founder & CEO</p>
                    </div>
                </div>

                <div class="managementShow">
                    <img className='rounded-2xl' src="./Assets/leftDescribe (2).png" alt="m"/>
                      <div class="managementTitle">

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p>Head of BlockChain</p>
                    </div>
                </div>

                <div class="managementHide">
                    <img className='rounded-2xl' src="./Assets/leftDescribe (1).png" alt="m"/>
                      <div>

                        <h1 class="founderName">Melisha Parkirs</h1>
                        <p>Head of BlockChain</p>
                    </div>
                </div>

                <div class="managementHide">
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