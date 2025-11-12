import React from 'react';

const Footer = () => {
    
    return (
        <footer className='max-w-[540px] lg:container mx-auto'>
    {/* <!-- MainFooterDiv --> */}
    <div class=" ml-8 flex gap-3 flex-col lg:ml-0 lg:flex-row justify-around my-14 pb-10">

        <div className='space-y-2'>
            <h1 class="roboto_bold font-bold ">Say Hello.</h1>
            <h3 className='text-sm'>Email : info@jstemplate.net</h3>
            <h3 className='text-sm'>+0800334645</h3>

            <p className='text-sm'>Reverside Building ,London SE1 <br />
            7PB, United Kingdom.
            </p>
        </div>


        <div className='space-y-2'>
            <h1 class="roboto_bold font-bold ">Community</h1>
            <h3 className='text-sm'>Contact Us</h3>
            <h3 className='text-sm'>About Us</h3>
            <h3 className='text-sm'>Blog</h3>
            <h3 className='text-sm'>Faq</h3>
        </div>

        <div className='space-y-2'>
            <h1 class="roboto_bold  font-bold">Quick Link</h1>

             <h3 className='text-sm' >Home</h3>
            <h3  className='text-sm'> About</h3>
            <h3  className='text-sm'> Blog</h3>
            <h3  className='text-sm'> Archived</h3>
            <h3  className='text-sm'> Author</h3>
            <h3  className='text-sm'>Contact</h3>
        </div>

           <div className='space-y-2'>
            <h1 class="roboto_bold font-bold">Category </h1>

             <h3 className='text-sm'>Lifestyle</h3>
            <h3 className='text-sm'> Travel</h3>
            <h3 className='text-sm'> Business</h3>
            <h3 className='text-sm'> Economy</h3>
            <h3 className='text-sm'>Technology</h3>
            <h3 className='text-sm'>Sports</h3>
        </div>
    </div>
</footer>
    
    );
};

export default Footer;