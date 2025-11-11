

const PopularBlockChain = () => {

   

    return (
        <div className="lg:max-w-[920px] mx-auto">

            
  <h1 class="text-3xl font-bold text-black text-center my-12"> Most Popular BlockChain Platform</h1>


            
    <div className="grid grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-1">

    <div className="border-b border-b-white py-4 border-r border-r-white"><img className="max-w-20 mx-auto " src="/public/Assets/bitcoin.png" alt="img" /></div>

    <div className="border-b border-b-white py-4 border-r border-r-white"><img className="max-w-20 mx-auto  " src="/public/Assets/etherum.png" alt="img" /></div>

    <div className="border-b border-b-white py-4 border-r border-r-white"><img className="max-w-20 mx-auto  " src="/public/Assets/polygon.png" alt="img" /></div>

    <div className="border-b border-b-white py-4 border-r border-r-white"><img className="max-w-20 mx-auto  " src="/public/Assets/polkadot.png" alt="img" /></div>

    <div className="border-b border-b-white py-4 border-r border-r-white"><img className="max-w-20 mx-auto  " src="/public/Assets/etherum.png" alt="img" /></div>


    <div className="lg:col-start-2 border-l border-l-white py-4 border-r border-r-white">
        <img className="max-w-20 mx-auto  " src="/public/Assets/polygon.png" alt="img" />
    </div>

    <div className="lg:col-start-3  py-4 border-r border-r-white">
        <img className="max-w-20 mx-auto  " src="/public/Assets/polkadot.png" alt="img" />
    </div>

    <div className="lg:col-start-4  py-4 border-r border-r-white">
        <img className="max-w-20 mx-auto  " src="/public/Assets/bitcoin.png" alt="img" />
    </div>

    </div>
    
            
        </div>
    );
};

export default PopularBlockChain;