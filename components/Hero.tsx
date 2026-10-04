import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { TextSubHeading } from "./ui/text-subheading-fadeIn";
import { socialMedia } from "@/data";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
      <div>
        <Spotlight
          className="-top-10 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100  dark:bg-grid-white/[0.04] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Hey There!
            </h2>

            <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-10xl"
                words="Myself Balvinder Singh"
            />
            <TextSubHeading
                className="text-center md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl "
                words="Software engineer. Builder. Problem solver."
            />

            <a href="/resume">
                <MagicButton
                    title="View my resume"
                    icon = {<FaLocationArrow/>}
                    position="right"
                />
            </a>
        </div>
      </div>
      <div className='flex -mt-10 md:flex-row flex-col justify-center items-center'>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-blac-200 rounded-lg border border-black-300'>
                    <a href={profile.link} target="_blank">
                    <img src={profile.img} alt={profile.img} width={20} height={20}/>
                    </a>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
};
