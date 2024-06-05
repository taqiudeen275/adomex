"use client"
import Image from "next/image";
import { HeroParallax } from "./aceternity_ui/hero-parallax";
import { ImagesSlider } from "./aceternity_ui/images-slider";
import { motion } from "framer-motion";
import NavBar from "./aceternity_ui/navigation-bar";
import AboutUs from "./components/about";
import Services from "./components/services";
import { Gallery } from "./components/gallery";
import Blog from "./components/blog";
import Contacts from "./components/contact";
import Footer from "./components/footer";
import Link from "next/link";
import {useEffect, useState} from "react";
import { get5Gallery, get3Blog } from "./action";
import { RecordModel } from "pocketbase";


export default function Home() {
  const [gallery, setGallery] = useState<RecordModel[]>([]);
  const [post, setPost] = useState<RecordModel[]>([]);
  const [galleryStr, setGalleryStr] = useState<string[]>([]);
  useEffect(() => {
    const fetchInitialData = async () => {
    const gallery = await get5Gallery();
    const respost = await get3Blog();
    setGallery(gallery);
    setPost(respost);
    console.log(respost);
  }
    fetchInitialData();
  }, []);

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
        Your Trusted Partner in Chemicals and Medical  <br />Diagnostics
        </motion.p>
        <Link href="/#about" >
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Learn more →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>
    <AboutUs />
    <Services />
    <Gallery images={} />
    <Blog />
    <Contacts />
   </>
  );
}
