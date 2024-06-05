"use client"
import { ImagesSlider } from '../aceternity_ui/images-slider';
import { motion } from "framer-motion";
import { Carousel as ShadcnCarousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import pb from '@/lib/my_pb';
import { getGallery } from '../action';
import { images } from '@/lib/consts';
import LoadingAnimation from '@/components/loading_animation';


const GalleryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [galleryStr, setGalleryStr] = useState<string[]>([]);
  const [orderedImages, setOrderedImages] = useState<string[]>(galleryStr)

  useEffect(() => {
    const fetchInitialData = async () => {
      const gallery_res = await getGallery();

      let tem_imgs: string[] = [];

      for (const record of gallery_res) {
        tem_imgs.push(`${pb.galleryBaseURL}${record.id}/${record.image}`);
      }

      setGalleryStr(tem_imgs);
      setIsLoading(false);

    }
    fetchInitialData();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    const clickedIndex = galleryStr.findIndex((img) => img === image)
    const reorderedImages = [
      ...galleryStr.slice(clickedIndex),
      ...galleryStr.slice(0, clickedIndex),
    ]
    setOrderedImages(reorderedImages)
  }
  const closeCarousel = () => {
    setSelectedImage(null)
    setOrderedImages(galleryStr)
  }


  return (
    <div className='pb-14'>
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
            Our <br /> Gallery Page
          </motion.p>

        </motion.div>
      </ImagesSlider>
      <div className="mt-16 pt-16">
    {isLoading &&  <div className="py-14 flex justify-center items-center"><LoadingAnimation /></div>}
          {!isLoading &&     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryStr.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer ${index === 0
                    ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2'
                    : 'col-span-1'
                  }`}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg hover:scale-[1.1] transition-all"
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <ShadcnCarousel
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"

            >
              <CarouselContent  >
                {orderedImages.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center items-center">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={1000}
                      height={1000}
                      className="max-h-[80vh] max-w-full object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white/10 hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </CarouselPrevious>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </CarouselNext>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={closeCarousel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ShadcnCarousel>
          )}
        </div>}
      </div>
    </div>
  )
}

export default GalleryPage