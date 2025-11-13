

const CaseStudy = () => {

    return (
        <div className="max-w-[540px] lg:max-w-[1160px] mt-16 mx-auto bg-black py-16 rounded-2xl lg:flex gap-2">
            
    {/* left */}
      <div class="caseStudiesleft lg:w-2/5 lg:ml-10">
            <h1 class="text-3xl font-semibold text-white ml-10">Case Studies</h1>
            
            <p class="mt-2 text-sm text-white ml-10">How do you create compelling presentations <br /> that  wow your colleagues and impress your <br /> managers?</p>


            <div className="ml-12 mt-10">
                <img src="./Assets/BlockChainServicePhoto.png" alt="blockChain"/>
            </div>
        </div>



        {/* Right  */}
           <div class="caseRight lg:w-3/5 ml-12 lg:ml-0">

            <div class="  lg:flex justify-between max-w-[540px]  border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className=" border mt-8 lg:ml-20 rounded-full p-3 border-white" src="./Assets/arrow_forward.png" alt="right"/>
                   
                </div>

             
            </div>

            <div class="lg:flex justify-between  max-w-[540px]  border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border mt-10 rounded-full p-3 border-white" src="./Assets/arrow_forward.png" alt="right"/>
                </div>
            </div>

          
            
            <div class="lg:flex justify-between  lg:max-w-[540px]  border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border mt-8 rounded-full p-3 border-white" src="./Assets/arrow_forward.png" alt="right"/>
                </div>
            </div>



            <div class="lg:flex justify-between  lg:max-w-[540px]  py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border mt-8 rounded-full p-3 border-white" src="./Assets/arrow_forward.png" alt="right"/>
                </div>
            </div>


         </div>



        </div>
    );
};

export default CaseStudy;