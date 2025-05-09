import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section
      id="features"
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
            priority
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                moreInfo={feature.moreInfo}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  title: string
  icon: string
  description: string
  moreInfo: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, icon, description, moreInfo }) => {
  return (
    <li
      className="
        w-full flex flex-col items-start p-6 bg-white/70 rounded-lg cursor-pointer
        transition-transform duration-300 ease-in-out
        transform will-change-transform 
        group
        hover:scale-105 hover:shadow-lg hover:bg-white hover:bg-opacity-90
      "
    >
      <div className="rounded-full p-4 lg:p-7 bg-black">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 text-gray-600">{description}</p>

      {/* Mobile (<lg): expands and shifts layout */}
      <div
        className="
          block lg:hidden mt-3
          max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-40
        "
      >
        <p className="regular-14 text-gray-500">{moreInfo}</p>
      </div>

      {/* Desktop (lg+): appears with fade, no layout shift */}
      <p
        className="
          hidden lg:block regular-14 mt-3 text-gray-500 
          opacity-0 transition-opacity duration-300 ease-in-out 
          group-hover:opacity-100
        "
      >
        {moreInfo}
      </p>
    </li>
  )
}

export default Features
