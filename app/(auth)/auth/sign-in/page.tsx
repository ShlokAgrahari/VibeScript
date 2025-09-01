import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-zinc-900 px-4">

      <div className="mb-8 md:mb-0 md:mr-12 flex justify-center">
        <Image 
          src="/login.svg" 
          alt="Login Image" 
          height={300} 
          width={300} 
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-md">
        <SignInFormClient />
      </div>
    </div>
  )
}

export default Page
