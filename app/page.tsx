"use client"
import Image from "next/image";
import { HeroParallax } from "./aceternity_ui/hero-parallax";
import { ImagesSlider } from "./aceternity_ui/images-slider";
import { motion } from "framer-motion";
import NavBar from "./aceternity_ui/navigation-bar";
import AboutUs from "./components/about";
import Services from "./components/services";
import { Gallery } from "./components/gallery";
import Blog, { BlogPost } from "./components/blog";
import Contacts from "./components/contact";
import Footer from "./components/footer";
import Link from "next/link";
import {useEffect, useState} from "react";
import { get5Gallery, get3Blog, getAuthor, getFAQ } from "./action";
import { RecordModel } from "pocketbase";
import pb from "@/lib/my_pb";
import { mapToBlogPost } from "@/lib/special_functions";
import { images } from "@/lib/consts";
import LoadingAnimation from "@/components/loading_animation";
import { FAQ,Highlight } from "./components/faq";

export default function Home() {
  const [post, setPost] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryStr, setGalleryStr] = useState<string[]>([]);
  const [faq, setFAQ] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchInitialData = async () => {
    const gallery_res = await get5Gallery();
    const post_res = await get3Blog();
    const author_res = await getAuthor();
    const faq_res = await getFAQ();
    let tem_imgs: string[] = [];

    for (const record of gallery_res) {
      
    for (const img of record.image) {
      tem_imgs.push(`${pb.galleryBaseURL}${record.id}/${img}`);
    }}
    const faqs = faq_res.map((faq_itm, index) =>  ({
        id: index + 1,
        name: "Dr. James Addo",
        designation: "CEO",
        content: (
          <p>
            <Highlight>{faq_itm.question ?? "NO FAQ YET?"} </Highlight> 
            {faq_itm.answer ?? "Yes"}
          </p>
        )
      }))
    if (faqs.length === 0){
      faqs.push(
       {
          id: 1,
          name: "Dr. James Addo",
          designation: "CEO",
          content: (
            <p>
              <Highlight>NO FAQ YET? </Highlight> 
              Yes
            </p>
          )
        })
      
    }
    setFAQ(faqs);
    const mappedPosts: BlogPost[] = post_res.map((post) => mapToBlogPost(post, author_res));
    setPost(mappedPosts);
    setGalleryStr(tem_imgs.slice(0, 5));
    setIsLoading(false);
  }
    fetchInitialData();
  }, []);


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
        <motion.p className="font-bold text-xl md:text-5xl text-center  text-white py-4">
        Your Trusted Partner in Pharmaceutical Products, <br />Medical Laboratory and Diagnostic - Imaging <br /> Services
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
    {isLoading &&  <div className="py-14 flex justify-center items-center"><LoadingAnimation /></div>}
    {!isLoading && <Gallery images={galleryStr} />}
    {isLoading &&  <div className="py-14 flex justify-center items-center"><LoadingAnimation /></div>}
    {!isLoading && <Blog posts={post} />}
    <Contacts />
    {isLoading &&  <div className="py-14 flex justify-center items-center"><LoadingAnimation /></div>}
    {!isLoading && <FAQ items={faq} />}
   </>
  );
}
