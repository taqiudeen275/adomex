"use client";
import React from 'react'
import Image from "next/image";
import { StickyScroll } from '../aceternity_ui/sticky-scroll-reveal';

const content = [
    {
      title: "Adomex Plus Chemicals",
      description:
        "We offer General Dispensing, Free Vitial, Diabetes and Hypertension screening and management, Hepatitis B & C screening and Vaccination, free Health and Drug Consults, Malaria rapid diagnostic testing(RDT), First aid treatment",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/3.jpg"
          width={1000}
          height={1000}
          className="h-full w-full object-center object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Adomex Medical laboratory and diagnostic centre",
      description:
        "Ultrasound diagnostics, Electrocardiograms, laboratory services, Hematology, Clinical chemistry, immunology, Pathology, Cytology",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image 
            src="/5.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      ),
    },
    {
      title: "Adomex Electricals appliances",
      description:
        "We provide all forms  of home and  electrical appliances.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Electrical Appliences
        </div>
      ),
    },
 
  ];

const Services = () => {
  return (
    <div className='py-8 mt-16 pt-16' id='services'>
              <h1 className='text-center font-extrabold text-primary text-5xl bg-gradient-to-tr  m-3'>Services</h1>

     <div className="px-4 pb-10 pt-3">
      <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default Services