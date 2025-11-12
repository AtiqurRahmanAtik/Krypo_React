

const RoadMap = () => {


    return (
        <div className="container mx-auto my-14 lg:relative">
               <h1 class="text-3xl mx-auto lg:max-w-[900px] font-bold text-black text-center lg:border-b py-10 ">Roadmap</h1>



            <div class="roadParent hidden mx-auto lg:max-w-[900px]  lg:flex justify-between mt-6">
                <div>
                <img className="lg:absolute top-26 left-70" src="/public/Assets/arrowd.png" alt="a"/>
                </div>

                <div>
                <img  className="lg:absolute top-26 left-126"  src="/public/Assets/arrowd.png" alt="a"/>
                </div>

                <div>
                <img  className="lg:absolute top-26 right-130" src="/public/Assets/arrowd.png" alt="a"/>
                </div>

                <div>
                <img className="lg:absolute top-26 right-70"  src="/public/Assets/arrowd.png" alt="a"/>
                </div>


            </div>


               <div className="relative ">

                {/* Road1 */}
        <div class="lg:flex gap-2  justify-center mt-10">

              <div class="max-w-[540px] min-h-64 ml-4  lg:ml-0 lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white text-xl font-semibold ">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

               <div class="max-w-[540px] min-h-64 ml-4 mt-28 lg:mt-0  lg:ml-0  lg:min-w-[220px] lg:min-h-[270px]  text-center bg-black rounded-xl">
                <h1 class="text-white  text-xl font-semibold">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

   <div class="max-w-[540px] min-h-64 ml-4 mt-28 lg:mt-0  lg:ml-0 lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white  text-xl font-semibold">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

                   <div class="max-w-[540px] min-h-64 ml-4 mt-28 lg:mt-0  lg:ml-0 lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white  text-xl font-semibold">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

          </div>




            {/* Right 2 */}
           <div class="lg:flex gap-2 justify-center items-center absolute  top-18 lg:left-47">

             <div class=" min-w-[540px] min-h-64 ml-4  lg:ml-0    lg:min-w-[220px] lg:min-h-[270px] text-center bg-white rounded-xl">

            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm pt-6 lg:pt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
  <li className="text-black text-sm">standard dummy text ever</li>
  <li className="text-black text-sm">since the 1500s, when</li>
</ul>
  
            </div>

            <div class="  min-w-[540px] min-h-64 ml-4 mt-30 lg:mt-0 lg:ml-0   lg:min-w-[220px] lg:min-h-[270px]  text-center bg-white rounded-xl">

            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm pt-6 lg:pt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
  <li className="text-black text-sm">standard dummy text ever</li>
  <li className="text-black text-sm">since the 1500s, when</li>
</ul>
  
            </div>

              <div class=" min-w-[540px] min-h-64 ml-4 mt-30 lg:mt-0  lg:ml-0    lg:min-w-[220px] lg:min-h-[270px] text-center bg-white rounded-xl">

            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm pt-6 lg:pt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
 
</ul>
  
            </div>

           <div class=" min-w-[540px] min-h-64  mt-30 lg:mt-0 ml-4  lg:ml-0    lg:min-w-[220px] lg:min-h-[270px] text-center bg-white rounded-xl">
            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm pt-6 lg:pt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
  <li className="text-black text-sm">standard dummy text ever</li>
  <li className="text-black text-sm">since the 1500s, when</li>
</ul>
  
            </div>

           </div>

               </div>
        </div>
    );
};

export default RoadMap;