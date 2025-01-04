const Footer = () => {
  const aStyle = 'hover:underline hover:text-emerald-600 hover:-translate-y-1 transition-all'
  return (
    <div className="bg-gray-200">
      <div id='footer'>
        <div className=" max-w-screen-2xl md:mx-auto mx-10 text-base-content py-20">
          <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-10 md:mx-28'>

            <div className='lg:col-span-2 md:col-span-1 flex flex-col gap-4'>
              <h1 className='text-4xl font-bold'>GEDGET-MART-BD</h1>
              <p>We are now going through a period when technology brings the revolution. From dawn to dusk every moment in our life is connected to technology. Various kinds of smart gadgets become inseparable parts of our daily life.</p>
              <div className='flex gap-2'>
                <a href="https://www.facebook.com/sujoydas36">
                  <img className='active:scale-95 border rounded-full transition-all' alt="" />
                </a>
                <img className='active:scale-95 border rounded-full transition-all' alt="" />
                <a href="https://www.instagram.com/sdsujoy920243/">
                  <img className='active:scale-95 border rounded-full transition-all' alt="" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-2 gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <div className='flex flex-col gap-4'>
                <h6 className="text-xl font-semibold">Company</h6>
                <a href='#footer' className={aStyle}>About Us</a>
                <a href='#footer' className={aStyle}>Work</a>
                <a href='#footer' className={aStyle}>Latest News</a>
                <a href='#footer' className={aStyle}>Careers </a>
              </div>
              <div className='flex flex-col gap-4'>
                <h6 className="text-xl font-semibold">Product</h6>
                <a href='#footer' className={aStyle}>Prototype</a>
                <a href='#footer' className={aStyle}>Plans & Pricing</a>
                <a href='#footer' className={aStyle}>Customers</a>
                <a href='#footer' className={aStyle}>Integrations</a>
              </div>
              <div className='flex flex-col gap-4'>
                <h6 className="text-xl font-semibold">Support</h6>
                <a href='#footer' className={aStyle}>Help Desk</a>
                <a href='#footer' className={aStyle}>Sales</a>
                <a href='#footer' className={aStyle}>Become a Partner</a>
                <a href='#footer' className={aStyle}>Developers </a>
              </div>
              <div className='flex flex-col gap-4'>
                <h6 className="text-xl font-semibold">Contact</h6>
                <a href='#footer' className={aStyle}> Dhaka, Bangladesh</a>
                <a href='#footer' className={aStyle}>+880 1303-436299</a>
              </div>
            </div>

          </div>

          <div className='md:mx-28 flex md:flex-row flex-col text-center justify-between pt-10 mt-10 border-t-2 '>
            <h1>@2023 <a href="/" className="font-medium hover:text-[#F27F20]">GADGET-MART-BD</a> . All Rights Reserved</h1>
            <h1>Powered by <a href="/" className="font-medium hover:text-[#F27F20]">Sujoy Das</a> </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer