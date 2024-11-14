import Image from 'next/image';
import Particle from '@/components/Particle';

export default function Home() {
  return (
    <main className="relative flex h-screen w-full items-center sm:max-w-screen-sm sm:px-4 md:max-w-screen-md md:px-10 lg:max-w-screen-lg lg:px-10">
      <div className="absolute right-0 top-0 z-[2] h-full w-[80%]">
        <Particle />
      </div>
      <div className="absolute bottom-0 z-[10] sm:right-2 md:right-10 lg:right-4">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="z-[1] sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px] lg:h-[560px] lg:w-[560px]"
        />
      </div>
      <div className="z-[10] flex max-w-[500px] flex-col gap-3">
        <h1 className="text-white sm:text-[40px] md:text-[50px]">
          Transforming Ideas into
          <span className="text-red-500"> Digital Reality</span>
        </h1>
        <p className="text-[16px] text-gray-200 lg:text-gray-400">
          In today’s fast-evolving digital world, turning concepts into impactful applications is
          both an art and a science. With a deep understanding of modern frameworks and tools, we
          bring innovative ideas to life, crafting intuitive, high-performance applications tailored
          to the needs of users and businesses alike. From concept through design to development,
          our focus remains on translating visions into seamless digital experiences that drive
          engagement and growth.
        </p>
        <div className="relative mt-4 h-[100px] w-[100px] md:h-[160px] md:w-[160px]">
          <Image
            src="/assets/circle-star.svg"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin h-auto w-auto border-red-500"
          />
        </div>
      </div>
    </main>
  );
}
