import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between lg:px-60 md:p-5 sm:p-2">
      <h1 className="text-white text-[45px]">
        Hrant <span className="font-thin">Simonyan</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex  gap-5 pt-6">
        {Socials.map((social) => (
          <social.icon
            key={social.name}
            // src={social.src}
            // alt={social.name}
            // width={24}
            // height={24}
            className="w-[32px] h-[32px] text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
