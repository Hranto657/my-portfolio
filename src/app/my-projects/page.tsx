import React from 'react';
import ProjectSlider from '@/components/ProjectSlider';

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 md:flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] font-semibold text-white">
          My Work <span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sequi accusamus odit, porro
          quis, similique culpa atque ratione architecto in consectetur maxime recusandae! Sunt sit
          nam excepturi? Optio, harum deleniti!
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default Page;
