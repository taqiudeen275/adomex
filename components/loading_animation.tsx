import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'
const LoadingAnimation = () => {
  return (
    <>
    <Image className='h-16 w-16 animate-bounce'  alt='logo' src={logo} />
    <p className='animate-pulse  bg-clip-text text-transparent font-bold bg-gradient-to-tr from-green-400 to-green-800'>Loading...</p>
    </>
  )
}

export default LoadingAnimation