'use client';

import { TreePalm, Home } from 'lucide-react';
import Lottie from 'lottie-react';
import React, { useEffect, useRef, useState } from 'react';

interface HailingAnimationProps {
  leftPercent: number;
  carLeft: number;
}

const HailingAnimation = ({ leftPercent, carLeft }: HailingAnimationProps) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [avatarLeft, setAvatarLeft] = useState<number | null>(null);

  useEffect(() => {
    setAvatarLeft(window.innerWidth * (leftPercent / 100));

    const handleResize = () => {
      setAvatarLeft(window.innerWidth * (leftPercent / 100));
    };

    window.addEventListener('resize', handleResize);

    fetch('https://lottie.host/516a2ec7-e0ee-46e7-81f2-3fc8787fa8de/5hdVdKxvGl.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error('Failed to load Lottie JSON', err));

    return () => window.removeEventListener('resize', handleResize);
  }, [leftPercent]);

  if (!animationData || avatarLeft === null || carLeft >= avatarLeft - 40) return null;

  return (
    <div
      className="absolute bottom-[70px] w-[70px] md:w-[90px] drop-shadow-md"
      style={{ left: `${leftPercent}%` }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

interface AvatarProps {
  color: string;
  leftPercent: number;
  carLeft: number;
}

const Avatar = ({ color, leftPercent, carLeft }: AvatarProps) => {
  const [avatarLeft, setAvatarLeft] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      setAvatarLeft(window.innerWidth * (leftPercent / 100));
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [leftPercent]);

  if (avatarLeft === null || carLeft >= avatarLeft - 40) return null;

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
    {/* Add path elements for the car SVG */}
    <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />
  </svg>
);

const CarAnimation = () => {
  const carRef = useRef<HTMLDivElement | null>(null);
  const [carLeft, setCarLeft] = useState<number>(0);

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
      <div className="absolute top-1 left-0 w-full h-8 bg-white opacity-20 animate-clouds" />

      <div className="absolute bottom-[80px] w-full flex justify-around px-6 text-green-600">
        <TreePalm size={50} />
        <Home size={50} className="text-orange-400" />
        <TreePalm size={50} />
        <Home size={50} className="text-orange-400" />
      </div>

      <div className="absolute bottom-0 w-full h-16 bg-slate-800">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 animate-road-line" />
      </div>

      <div ref={carRef} className="absolute bottom-[70px] left-0 animate-car-bounce transition-all duration-200">
        <SideCar />
      </div>

      <Avatar color="sky-600" leftPercent={20} carLeft={carLeft} />
      <HailingAnimation leftPercent={30} carLeft={carLeft} />
      <Avatar color="emerald-500" leftPercent={50} carLeft={carLeft} />
      <Avatar color="violet-500" leftPercent={70} carLeft={carLeft} />
    </div>
  );
};

export default CarAnimation;