import Image from "next/image";
import Particle from "@/components/Particle";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 lg:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] lg:h-[560px] lg:w-[560px]"
        />
      </div>
      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0 w-auto h-auto"
      />
      <div className="flex flex-col gap-3 z-[10] md:pl-40 sm:pl-4 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Transforming Ideas into
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ab
          commodi nam quibusdam eligendi magnam fugit a temporibus sed
          laudantium natus totam vel repellat impedit autem quisquam quos,
          excepturi ipsa.
        </p>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-10">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin w-auto h-auto"
          />
        </div>
      </div>
    </main>
  );
}
