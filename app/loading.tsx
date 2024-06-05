import LoadingAnimation from "@/components/loading_animation";
import React from "react";

export default function LoadingScreen(){
    return (
        <div className='w-screen h-screen flex items-center justify-center absolute top-0 left-0 bg-black/40'>
          <LoadingAnimation />
        </div>
    )
}