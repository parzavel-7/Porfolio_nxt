import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-35 pb-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-30 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[70vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-20 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-wider text-xs text-blue-100 text-center max-w-80">
            Welcome to my webpage.
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
            words="Trying to create something new."
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:test-lg lg:text-2xl">
            Hi, I'm Suraj a front-end developer from Nepal.
          </p>

          <a href="#about">
            <MagicButton
              title="See my Works"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
