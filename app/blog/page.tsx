"use client";
import React from 'react'
import Image from "next/image";
import { ImagesSlider } from '../aceternity_ui/images-slider';
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { getAuthor, getBlog } from '../action';
import { mapToBlogPost } from '@/lib/special_functions';
import { images } from '@/lib/consts';
import LoadingAnimation from '@/components/loading_animation';


interface BlogPost {
  id: string;
  title: string;
  date: string;
  overview: string;
  author: string;
  authorPhoto: string;
  coverImage: string;
}


const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const fetchInitialData = async () => {
      const post_res = await getBlog();
      const author_res = await getAuthor();
      let tem_imgs: string[] = [];

      const mappedPosts: BlogPost[] = post_res.map((post) => mapToBlogPost(post, author_res));
      setPosts(mappedPosts);
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
          <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Our <br />Blog Page
          </motion.p>

        </motion.div>
      </ImagesSlider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
       {isLoading &&  <div className="py-14 flex justify-center items-center"><LoadingAnimation /></div>}
        {!isLoading && <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/view/${post.id}`} key={post.id} className=" w-[350px]  hover:text-clip hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-800">
              <Image
                src={post.coverImage}
                alt={`Cover Image for ${post.title}`}
                width={200}
                height={300}
                className="w-full h-[340px] rounded-sm object-fill hover:scale-[1.1] transition-all"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                <p className="mb-4 font-mono text-gray-700">
                  {post.overview}</p>
                <div className='flex items-center gap-10 text-sm'>
                  <p className="mb-4 text-gray-700 flex uppercase items-center gap-2">
                    <Avatar>
                      <AvatarImage src={post.authorPhoto} alt="Author Photo" />
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar> {post.author}</p>
                  <p className="mb-4 text-gray-600">{post.date}</p>
                </div>
                {/* Add a link or additional content for each post */}
              </div>
            </Link>
          ))}
        </div>}
      </div>
    </>
  )
}

export default BlogPage