import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" className="max-container padding-container flex flex-col gap-10 py-8 pb-20 md:gap-20 md:py-10 md:pb-32 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image 
          src="/logo.svg"
          alt="logo"
          width={110}
          height={1150}
         
        /> */}
        <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">RideVerse</h1>
        <p className="mt-4 text-sm md:text-base text-gray-30 md:mt-6 xl:max-w-[520px]">
          Your journey, redefined. RideVerse ensures seamless travel with real-time navigation, 
          smart ride-sharing, and offline maps. Wherever you go, we make every trip effortless 
          and connected—all in one app.
        </p>

        <div className="my-6 md:my-8 lg:my-11 flex flex-wrap gap-4 md:gap-5">
          <div className="flex items-center gap-1 md:gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
            ))}
          </div>

          <p className="text-sm font-bold md:text-base lg:text-xl text-blue-70">
            5k
            <span className="font-normal ml-1">Happy Travelers</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_black" 
          />
          <Button 
            type="button" 
            title="Explore Features" 
            icon="/playy.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start mt-10 xl:mt-0">
        <div className="relative z-20 w-full max-w-[268px] mx-auto xl:mx-0 flex flex-col gap-6 md:gap-8 rounded-3xl bg-gray-900 px-5 py-6 md:px-7 md:py-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-sm md:text-base text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="text-lg md:text-xl font-bold text-white">Pune</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-sm md:text-base block text-gray-20">Distance</p>
              <p className="text-lg md:text-xl font-bold text-white">120 km</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm md:text-base block text-gray-20">Shared Ride?</p>
              <p className="text-lg md:text-xl font-bold text-white">Yess!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero