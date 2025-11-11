

const RoadMap = () => {


    return (
        <div className="container mx-auto my-14 lg:relative">
               <h1 class="text-3xl mx-auto lg:max-w-[900px] font-bold text-black text-center border-b py-10 ">Roadmap</h1>



            <div class="roadParent  mx-auto lg:max-w-[900px] flex justify-between mt-6">
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


               <div className="lg:relative ">

                {/* Road1 */}
        <div class="flex gap-2 justify-center mt-10">

              <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white text-xl font-semibold ">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

               <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white  text-xl font-semibold">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

   <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white  text-xl font-semibold">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

                   <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-black rounded-xl">
                <h1 class="text-white  text-xl font-semibold">Quarter 1</h1>
                <p class="text-white"> Foundation and Planing </p>
            </div>

          </div>



            {/* Right 2 */}
           <div class="flex gap-2 justify-center lg:absolute lg:top-18 lg:left-47">

             <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-white rounded-xl">
            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm mt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
  <li className="text-black text-sm">standard dummy text ever</li>
  <li className="text-black text-sm">since the 1500s, when</li>
</ul>
  
            </div>

            <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-white rounded-xl">
            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm mt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
  <li className="text-black text-sm">standard dummy text ever</li>
  <li className="text-black text-sm">since the 1500s, when</li>
</ul>
  
            </div>

              <div class="lg:min-w-[220px] lg:max-h-[220px] text-center bg-white rounded-xl">
            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm mt-6">Lorem Ipsum is simply dummy</li>
  <li className="text-black text-sm">text of the printing and</li>
  <li className="text-black text-sm">typesetting industry. Lorem</li>
  <li className="text-black text-sm">Ipsum has been the industry's</li>
 
</ul>
  
            </div>

           <div class="lg:min-w-[220px] lg:min-h-[270px] text-center bg-white rounded-xl">
            <ul className="ml-2  list-image-[url('/Assets/Star%201.png')] list-disc pl-5 text-start  space-y-4">
  <li className="text-black text-sm mt-6">Lorem Ipsum is simply dummy</li>
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