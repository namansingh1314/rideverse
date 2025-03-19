import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section id='getapp' className="flexCenter w-full flex-col pb-8 sm:pb-12 md:pb-16 lg:pb-[100px]">
      <div className="get-app flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-4 lg:gap-8">
        <div className="z-20 flex w-full flex-1 flex-col items-center md:items-start justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-12">
          <h2 className="bold-28 sm:bold-32 md:bold-40 lg:bold-64 xl:max-w-[320px] text-center md:text-left">Get for free now!</h2>
          <p className="regular-14 sm:regular-16 text-gray-10 text-center md:text-left">Available on iOS and Android</p>
          <div className="flex w-full flex-col sm:flex-row md:flex-col lg:flex-row gap-2 sm:gap-3">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_black"
              full
            />
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:justify-end mt-6 md:mt-0">
          <Image 
            src="/phones.png" 
            alt="phones" 
            width={550} 
            height={870}
            className="w-[200px] h-auto sm:w-[280px] md:w-[350px] lg:w-[450px] xl:w-[550px]"
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp