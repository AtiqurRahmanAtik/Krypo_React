

const CollabrationCompany = () => {


    
     const CollabrationCompany =[

        {
            id:1,
        
            img : "/public/Assets/12064006_4897896.jpg"
        },
          {
            id:2,
          
            img : "/public/Assets/12064717_4873163.jpg"
        },
          {
            id:3,
          
            img : "/public/Assets/15478128_5615156.jpg"
        },
         {
            id:4,
        
            img : "/public/Assets/12064006_4897896.jpg"
        },
          {
            id:5,
          
            img : "/public/Assets/12064717_4873163.jpg"
        },
          {
            id:6,
          
            img : "/public/Assets/15478128_5615156.jpg"
        },
         {
            id:7,
        
            img : "/public/Assets/12064006_4897896.jpg"
        },
          {
            id:8,
          
            img : "/public/Assets/12064717_4873163.jpg"
        },
          {
            id:9,
          
            img : "/public/Assets/15478128_5615156.jpg"
        },
           {
            id:10,
          
            img : "/public/Assets/15478128_5615156.jpg"
        },


    ];



    return (

        <div className="lg:max-w-[920px] mx-auto ">

  <h1 class="text-3xl font-bold text-black text-center my-20"> Collaboration with Other Companies</h1>

            <div className="lg:ml-20 grid gap-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
                {
                    CollabrationCompany?.map((item)=> (
                         <div className="border-b border-b-white border-r border-r-white">
                            <img className="max-w-32 mx-auto py-8" src={item.img} alt="img" />
                         </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default CollabrationCompany;