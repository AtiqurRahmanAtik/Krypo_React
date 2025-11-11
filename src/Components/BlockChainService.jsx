

const BlockChainService = () => {


     const BlockChainService =[

        {
            id:1,
            title : "UX review presentations",
            describe : "How do you create compelling presentations that wow ,your colleagues and impress your managers?",
            img : "/public/Assets/Image_1.png"
        },
          {
            id:2,
            title : "UX review presentations",
            describe : "How do you create compelling presentations that wow ,your colleagues and impress your managers?",
            img : "/public/Assets/Image_1.png"
        },
          {
            id:3,
            title : "UX review presentations",
            describe : "How do you create compelling presentations that wow ,your colleagues and impress your managers?",
            img : "/public/Assets/Image_1.png"
        }
    ];



    return (
        <div className="container mx-auto bg-white py-16 rounded-2xl ">
            <div className="flex gap-16 ">


                <div className="ml-16 lg:relative">
     <h2 class="text-4xl font-semibold text-black">Our Blockchain Solutions</h2>
    <p class="mt-2 text-sm ">We provide cutting-edge blockchain solutions to help businesses innovate and thrive in the digital age.</p>

        
          <div class="flex gap-1 mt-6 ">
        <div className="lg:ml-46">
            <img src="./Assets/Frame 32.png" alt="left"/>
        </div>

        <div>
            <img src="./Assets/Frame 33.png" alt="right"/>
        </div>
    </div>


    <div class="lg:absolute lg:-bottom-50 lg:-left-10">
            <img  src="./Assets/blockchain_10439415.png" alt="blockchain"/>
        </div>


                </div>



                {/* right */}
                <div className="hidden grid  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:inline-flex ">
                    {
                        BlockChainService?.map((item)=>  <div key={item.id} className="bg-[#eef4ff] p-4 rounded-2xl ">
                <img src={item.img} alt="icon1"/>
                <h3 className="my-2 text-lg font-bold text-black">{item.title}</h3>
                <p className="text-sm">{item.describe}</p>
            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default BlockChainService;