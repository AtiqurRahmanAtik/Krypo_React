

const JoinKrypo = () => {


    return (
        <div className='max-w-[540px] lg:container mx-auto my-11 '>
            

            <div className='lg:flex gap-4 items-center justify-center'>

               <div class="KrypoLeft flex gap-2 items-center justify-center text-2xl font-semibold text-black min-w-58 min-h-40 bg-white rounded-2xl ">
                <div>
                    <img src="./Assets/Logo (2).png" alt="logo"/>
                </div>

                <div >
                    <h1>Krypo </h1>
                </div>
            </div>   



            {/* right */}
               <div class="relative text-2xl font-semibold text-black min-w-[420px] min-h-40  rounded-2xl  bg-[linear-gradient(90deg,rgba(22,26,242,1)_0%,rgba(126,97,255,1)_43%,rgba(187,205,237,1)_80%)]">

                <h1 class="roboto_bold text-white mt-12 ml-6 ">Join Krypo Newsller</h1>

                <input className='ml-6 mt-10 lg:mt-0 p-2 rounded-xl bg-white text-lg font-normal min-w-[340px]' type="text" name="name" id="name" placeholder="Your Email Address"/>


                <button className='bg-black text-sm font-normal max-w-32 px-6 py-3  text-white  rounded-xl  absolute right-28 bottom-11 lg:right-4 lg:bottom-9'> Subtribe</button>
            </div>

                </div>



        </div>
    );
};

export default JoinKrypo;