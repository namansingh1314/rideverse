'use client';

import { TreePalm, Home } from 'lucide-react';
import Lottie from 'lottie-react';
import React, { useEffect, useRef, useState } from 'react';

const HailingAnimation = ({ leftPercent, carLeft }: { leftPercent: number; carLeft: number }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const avatarLeft = window.innerWidth * (leftPercent / 100);
  const hide = carLeft >= avatarLeft - 40;

  useEffect(() => {
    fetch('https://lottie.host/516a2ec7-e0ee-46e7-81f2-3fc8787fa8de/5hdVdKxvGl.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error('Failed to load Lottie JSON', err));
  }, []);

  if (!animationData || hide) return null;

  return (
    <div
      className="absolute bottom-[70px] w-[70px] md:w-[90px] drop-shadow-md"
      style={{ left: `${leftPercent}%` }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

const Avatar = ({
  color,
  leftPercent,
  carLeft,
}: {
  color: string;
  leftPercent: number;
  carLeft: number;
}) => {
  const avatarLeft = window.innerWidth * (leftPercent / 100);
  const hide = carLeft >= avatarLeft - 40;

  if (hide) return null;

  return (
    <div
      className="absolute bottom-[70px] drop-shadow-md"
      style={{ left: `${leftPercent}%` }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 448 512"
        fill="currentColor"
        className={`text-${color}`}
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm89.6 32h-11.7a174.6 174.6 0 0 1-155.8 0h-11.7A134.4 134.4 0 0 0 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.3-60.1-134.4-134.4-134.4z" />
      </svg>
    </div>
  );
};

const SideCar = () => (
  <svg
    viewBox="0 0 640 512"
    width="70"
    height="40"
    fill="currentColor"
    className="text-black drop-shadow-md"
  >
    <path d="M544 192h-16L482.7 94.6A64 64 0 0 0 422.1 64H217.9a64 64 0 0 0-60.6 30.6L112 192H96a96 96 0 0 0-96 96v96a32 32 0 0 0 32 32h48a80 80 0 0 0 160 0h160a80 80 0 0 0 160 0h48a32 32 0 0 0 32-32v-96a96 96 0 0 0-96-96zM128 432a48 48 0 1 1 48-48 48 48 0 0 1-48 48zm368 0a48 48 0 1 1 48-48 48 48 0 0 1-48 48z" />
  </svg>
);


const CarAnimation = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const [carLeft, setCarLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carRef.current) {
        const pos = carRef.current.getBoundingClientRect().left;
        setCarLeft(pos);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:block relative w-full h-[250px] md:h-[300px] bg-gradient-to-b from-sky-100 to-sky-300 overflow-hidden rounded-xl shadow-2xl">

      {/* Clouds */}
      <div className="absolute top-1 left-0 w-full h-8 bg-white opacity-20 animate-clouds" />

      {/* Trees & Houses */}
      <div className="absolute bottom-[80px] w-full flex justify-around px-6 text-green-600">
        <TreePalm size={50} />
        <Home size={50} className="text-orange-400" />
        <TreePalm size={50} />
        <Home size={50} className="text-orange-400" />
      </div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-16 bg-slate-800">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 animate-road-line" />
      </div>

      {/* Car */}
      <div
        ref={carRef}
        className="absolute bottom-[70px] left-0 animate-car-bounce transition-all duration-200"
      >
        <SideCar />
      </div>

      {/* People */}
      <Avatar color="sky-600" leftPercent={20} carLeft={carLeft} />
      <HailingAnimation leftPercent={30} carLeft={carLeft} />
      <Avatar color="emerald-500" leftPercent={50} carLeft={carLeft} />
      <Avatar color="violet-500" leftPercent={70} carLeft={carLeft} />
    </div>
  );
};

export default CarAnimation;
