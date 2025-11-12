

const CaseStudy = () => {

    return (
        <div className="max-w-[540px] lg:max-w-3/4 mt-16 mx-auto bg-black py-16 rounded-2xl lg:flex gap-12">
            
    {/* left */}
      <div class="caseStudiesleft">
            <h1 class="text-3xl font-semibold text-white ml-10">Case Studies</h1>
            
            <p class="mt-2 text-sm text-white ml-10">How do you create compelling presentations that wow your colleagues <br /> and impress your managers?</p>


            <div className="ml-12 mt-10">
                <img src="./Assets/BlockChainServicePhoto.png" alt="blockChain"/>
            </div>
        </div>



        {/* Right  */}
           <div class="caseRight ml-12 lg:ml-0">

            <div class="lg:flex justify-between border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border-r mt-8 lg:ml-20 rounded-full p-3 border-r-white" src="./Assets/arrow_forward.png" alt="right"/>
                   
                </div>

             
            </div>

            <div class="lg:flex justify-between border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border-r mt-10 rounded-full p-3 border-r-white" src="./Assets/arrow_forward.png" alt="right"/>
                </div>
            </div>

          
            
            <div class="lg:flex justify-between border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border-r mt-8 rounded-full p-3 border-r-white" src="./Assets/arrow_forward.png" alt="right"/>
                </div>
            </div>



            <div class="lg:flex justify-between border-b border-b-white py-6">
               <div>
                 <h1 class="text-xl font-bold text-white">UX review presentations</h1>
                <p class="text-sm text-white">How do you create compelling presentations</p>
               </div>

                <div>
                    <img className="border-r mt-8 rounded-full p-3 border-r-white" src="./Assets/arrow_forward.png" alt="right"/>
                </div>
            </div>


         </div>



        </div>
    );
};

export default CaseStudy;