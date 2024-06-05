"use client"
import React from 'react';
import { motion } from "framer-motion";
import { ImagesSlider } from '../aceternity_ui/images-slider';
import { BackgroundBeams } from '../aceternity_ui/background-beams';


const AboutPage = () => {
    const images = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
      ];
  return (
    <>
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        About <br />The Adomex Group
        </motion.p>
      
      </motion.div>
    </ImagesSlider>
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg  p-8">
        <h1 className="text-3xl font-bold mb-6">About Adomex</h1>
        <p className="mb-8">
          Adomex is a diversified company dedicated to providing innovative solutions across various industries. With a commitment to excellence and a passion for serving our customers, we strive to make a positive impact in the communities we serve.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Divisions</h2>
        <ul className="list-disc pl-6 mb-8">
          <li className="mb-2">
            <strong>Adomex Plus Chemicals:</strong> Specializing in the  distribution of high-quality chemicals for industrial and commercial applications.
          </li>
          <li className="mb-2">
            <strong>Adomex Information Services:</strong> Offering cutting-edge technology solutions, software development, and IT consulting services.
          </li>
          <li className="mb-2">
            <strong>Adomex Medical Laboratory and Diagnostic Centre:</strong> Providing comprehensive medical testing and diagnostic services to ensure accurate and timely healthcare.
          </li>
          <li className="mb-2">
            <strong>Adomex Electrical Appliances:</strong> Sales of innovative electrical appliances for modern homes and businesses.
          </li>
          <li className="mb-2">
            <strong>Adomex Crop and Animal Farming:</strong> Promoting sustainable agriculture practices and producing high-quality crops and livestock products.
          </li>
        </ul>

        <p>
          At Adomex, we strive to be a trusted partner for our clients, offering exceptional products and services while upholding the highest standards of integrity and professionalism. Our team of dedicated professionals is committed to delivering innovative solutions that meet the evolving needs of our customers.
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutPage;