import React from 'react';
import Image from 'next/image';
import ServiceSlider from '@/components/ServiceSlider';

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between overflow-hidden sm:max-w-screen-sm sm:justify-center sm:px-4 md:max-w-screen-md md:flex-col md:px-10 lg:max-w-screen-lg lg:flex-row lg:px-10">
      <div className="sm: mb-4 flex flex-col gap-3 pb-60 sm:pb-0 lg:mb-0 lg:mr-4 lg:w-[42%]">
        <h1 className="text-[50px] font-semibold text-white">
          My Skills <span className="text-red-500">.</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400">
          I am a Frontend Developer with over two years of experience, specializing in JavaScript,
          TypeScript, and ReactJS. My approach focuses on building fast, responsive, and
          user-friendly applications. I also work with backend technologies like Node.js and AWS
          Amplify, enabling me to contribute to full-stack projects. I am familiar with React Query,
          React Hook Form, GraphQL, and Context API—tools that simplify data handling and state
          management. I am committed to clean code and enhancing user experience.
        </p>
      </div>
      <div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-75">
        <Image
          src="/assets/bulb.png"
          alt="bulb"
          width={260}
          height={260}
          className="hidden h-full w-full sm:block"
        />
      </div>
      <ServiceSlider />
    </div>
  );
};

export default Page;
