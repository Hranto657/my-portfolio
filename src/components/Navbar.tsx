import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[20] flex w-full items-center justify-between gap-5 bg-transparent sm:max-w-screen-sm sm:px-4 md:max-w-screen-md md:px-10 lg:max-w-screen-lg lg:px-10">
      <h1 className="text-white sm:text-[26px] md:text-[36px] lg:text-[45px]">
        Hrant <span className="font-thin">Simonyan</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex gap-5">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50"
          >
            <social.icon className="sm:h-[28px] sm:w-[28px] lg:h-[32px] lg:w-[32px]" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
