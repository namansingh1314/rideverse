import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[280px] sm:min-w-[500px] md:min-w-[650px] lg:min-w-[860px] xl:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-4 sm:p-6 lg:px-20 lg:py-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="rounded-full bg-black p-3 sm:p-4">
            <Image
              src="/location.svg"
              alt="map"
              width={28}
              height={28}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold sm:text-base md:text-lg text-white">{title}</h4>
            <p className="text-xs sm:text-sm md:text-base text-white">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="flex -space-x-2 sm:-space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-6 lg:w-6 xl:h-6 xl:w-6 rounded-full"

                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="text-sm font-bold sm:text-base md:text-lg text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section
      id="camp"
      className="relative flex flex-col py-6 sm:py-10 lg:mb-10 lg:py-20 xl:mb-20 max-w-full"
    >
      <div className="hide-scrollbar flex h-[200px] sm:h-[260px] md:h-[340px] w-full items-start justify-start gap-4 sm:gap-6 md:gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="User Friendly Drivers"
          subtitle="24/7 Available"
          peopleJoined="50+ people joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Customer Support"
          subtitle="Satisfaction Guarantee"
          peopleJoined="50+ Joined"
        />
      </div>
      
      <div className="flex justify-center lg:justify-end mt-6 sm:mt-8 lg:-mt-60 px-4 sm:px-6 lg:mr-6">
        <div className="bg-black p-4 sm:p-6 md:p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl capitalize text-white">
            <strong>Lost on the Road?</strong> Let RideVerse Guide You!
          </h2>
          <p className="text-xs sm:text-sm md:text-base xl:text-lg mt-3 sm:mt-4 md:mt-5 text-white">
            Never worry about losing your way again! With RideVerse, you'll always have
            access to reliable navigation, real-time tracking, and offline maps to guide you
            through any journey—whether in the city or the wild.
          </p>
          <Image
            src="/quote.svg"
            alt="rideverse-quote"
            width={186}
            height={219}
            className="rideverse-quote absolute right-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[186px] opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-50 xl:opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;