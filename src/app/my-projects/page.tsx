import React from 'react';
import ProjectSlider from '@/components/ProjectSlider';

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between overflow-hidden sm:max-w-screen-sm sm:justify-center sm:px-4 md:max-w-screen-md md:flex-col md:px-10 lg:max-w-screen-lg lg:flex-row lg:px-10">
      <div className="sm: mb-4 flex flex-col gap-3 pb-60 sm:pb-0 lg:mb-0 lg:mr-4 lg:w-[42%]">
        <h1 className="text-[50px] font-semibold text-white">
          My Work <span className="text-red-500">.</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400">
          Here are some of the projects I have worked on, showcasing my skills and approach to web
          development. Each project was created with a focus on performance, usability, and clean
          code. I aim to build responsive, intuitive, and efficient interfaces that solve real-world
          challenges and create a positive experience for users. Explore my work to see how I bring
          ideas to life using modern technologies and tools
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default Page;
