import React from 'react'
import { WobbleCard } from '../aceternity_ui/wobble-card'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='max-w-7xl mx-auto w-full py-3 my-5 px-3 mt-16 pt-16' id='about'>
        <h1 className='text-center font-extrabold text-primary text-5xl m-3'>About Us</h1>
        <h1 className='text-center font-mono bg-clip-text text-primary text-xl  m-3'>The Adomex Group has many businesses with different services. Below are some of our services</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-[70%]">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Adomex Plus Chemicals 
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
        Providing quality health services to the people in the communities we serve and the nation at large is our priority and it is a great honour to provide you with quality and affordable pharmaceutical and surgical products
        </p>
      </div>
      <Image
        src="/3.jpg"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -right-20 -bottom-[30%] lg:-right-[40%]  lg:-bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Adomex Information Services
      </h2>
      <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        we strive to provide genuine informations and enriching experience, catering to the diverse needs and interests of our community.
      </p>
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-red-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <div className="max-w-sm">
        <h2 className="max-w-s md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Adomex Medical Laboratory And Diagnostic Centre
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        At Adomex Medical Laboratory and Diagnostic Centre, we are dedicated in providing comprehensive and reliable medical testing
         services to support the healthcare needs of our community and beyond. We provide excellence diagnostic informations for healthy lives and well-being for all
        </p>
      </div>
      <Image
        src="/5.jpg"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-30 lg:-bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-[70%]">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Adomex  crop and animals Farming 
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
        At Adomex Crop and Animal Farming, we are dedicated to sustainable and responsible agricultural practices that prioritize the well-being of our environment, our animals, and the quality of our products``. 
        </p>
      </div>
      <Image
        src="/6.jpg"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -right-20 -bottom-[30%] lg:-right-[40%]  lg:-bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Adomex Electricals appliances
      </h2>
      <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
      At Adomex Electrical Appliances, we are committed to providing innovative and high-quality home and kitchen appliances that make everyday life more convenient and efficient. 
      </p>
    </WobbleCard>
  </div>     
    </div>
   
  )
}

export default AboutUs