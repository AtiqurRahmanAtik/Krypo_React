

const NewArticels = () => {


    return (
        <div className="max-w-[540px] p-8 mt-16 mx-auto lg:max-w-[75%] bg-[url('/Assets/brain1.jpg')] bg-cover bg-center bg-no-repeat py-16 rounded-2xl">
            

                   <h1 class="text-3xl font-bold text-black lg:ml-8">News And Articles</h1>

              <div class="space-y-2 lg:flex gap-4 justify-center mt-8 ">
                {/* <!-- leftArticles --> */}
          
                <div className="border border-[#161af2] p-2 rounded-2xl">

                    <img className="min-w-[420px] max-h-[220px] rounded-2xl object-cover " src="./Assets/Frame 24.png" alt="f"/>

                       <div className="ml-2">
                  <h1 className="mt-2 text-xl font-semibold text-black">The role of BlockChain technology in modern <br /> business</h1>
                    <p className="my-1"><span className="text-black"> may 2, 2024 /</span>  No Cements</p>
                </div>

                </div>

             



            {/* <!-- rightArticles --> */}
            <div class="sm:space-y-5 lg:max-w-96 space-y-3">
                <div className=" border  border-[#161af2] p-4 rounded-2xl lg:min-w-96">

                    <h1 className="text-2xl font-semibold">UX review presentations</h1>
                    <p> <span className="text-black">may 2, 2024 /</span> <span >No Cements</span></p>
                </div>

                 <div className="border  border-[#161af2] p-4 rounded-2xl min-w-96">

                    <h1 className="text-2xl font-semibold">UX review presentations</h1>
                    <p> <span className="text-black">may 2, 2024 /</span> <span >No Cements</span></p>
                </div>

                 <div className="border border-[#161af2] p-4 rounded-2xl min-w-96">

                    <h1 className="text-2xl font-semibold">UX review presentations</h1>
                    <p> <span className="text-black">may 2, 2024 /</span> <span >No Cements</span></p>
                </div>
            </div>

            </div>

        </div>
    );
};

export default NewArticels;