import React from 'react'

const Blog = () => {
    const mockPosts :BlogPost[] = [
        {
          id: '1',
          title: 'Architectural Engineering Wonders',
          date: 'October 21, 2022',
          author: 'Mario Sanchez',
          authorPhoto: '/2.jpg',
          coverImage: '/2.jpg',
        },
        {
            id: '2',
            title: 'Architectural Engineering Wonders',
            date: 'October 21, 2022',
            author: 'Mario Sanchez',
            authorPhoto: '/3.jpg',
            coverImage: '/3.jpg',
          },
          {
            id: '2',
            title: 'Architectural Engineering Wonders',
            date: 'October 21, 2022',
            author: 'Mario Sanchez',
            authorPhoto: '/3.jpg',
            coverImage: '/3.jpg',
          },
        
          

        // Add more mock posts as needed
      ];
    return (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16">
            <div className="my-8 ">
                <h1 className='text-center font-extrabold  bg-clip-text text-transparent text-5xl bg-gradient-to-tr from-green-400 to-green-800 m-3 pb-4'>Blog</h1>
                <BlogListGrid posts={mockPosts} />
            </div>
            </div>
        </>
    )
}

export default Blog

// components/BlogListGrid.tsx
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: string;
    authorPhoto: string;
    coverImage: string;
}

interface BlogListGridProps {
    posts: BlogPost[];
}

const BlogListGrid: React.FC<BlogListGridProps> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <Link href={"#"} key={post.id} className=" w-[350px]  hover:text-clip hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-800">
                    <Image
                        src={post.coverImage}
                        alt={`Cover Image for ${post.title}`}
                        width={200}
                        height={300}
                        className="w-full h-[340px] rounded-sm object-fill hover:scale-[1.1] transition-all"
                    />
                    <div className="p-4">
                        <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                        <div className='flex items-center gap-4'>
                            <p className="mb-4 text-gray-700 flex items-center gap-2"> 
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
        </div>
    );
};
