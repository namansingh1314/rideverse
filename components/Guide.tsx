import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section id='guide' className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-12 md:pb-24">
        <Image src="/logo.svg" alt="camp" width={100} height={1150} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-gray-900">
          We are here for you
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-32 md:bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the RideVerse application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
      
      <div className="flexCenter max-container relative w-full px-4 sm:px-6 md:px-0">
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] xl:h-[850px] 2xl:rounded-5xl">
          <Image
            src="/car.jpg"
            alt="car"
            fill
            className="object-cover object-center rounded-3xl md:rounded-5xl"
          />
        </div>
        
        <div className="absolute flex bg-white py-4 sm:py-6 md:py-8 pl-3 sm:pl-4 md:pl-5 pr-4 sm:pr-5 md:pr-7 gap-2 sm:gap-3 rounded-2xl md:rounded-3xl border shadow-md top-4 left-4 sm:left-4 md:left-[5%] lg:top-20 max-w-[90%] sm:max-w-[80%] md:max-w-none">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={258}
            className="h-auto w-3 sm:w-4 md:w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="text-xs sm:text-sm md:regular-16 text-gray-20">Destination</p>
                <p className="font-bold text-xs sm:text-sm md:bold-16 ml-2 md:ml-3 text-gray-900">180 min</p>
              </div>
              <p className="font-bold text-base sm:text-lg md:bold-20 mt-1 md:mt-2">Mumbai</p>
            </div>
            
            <div className='flex w-full flex-col mt-2 md:mt-0'>
              <p className="text-xs sm:text-sm md:regular-16 text-gray-20">Start track</p>
              <h4 className="font-bold text-base sm:text-lg md:bold-20 mt-1 md:mt-2 whitespace-nowrap">Pune</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide