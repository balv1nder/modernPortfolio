"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import animationData from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { techStack } from "@/data";

// lottie-react wraps lottie-web, which touches `document` at import time and
// breaks the server prerender. Load it on the client only.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "grid lg:grid-cols-5 md:auto-rows-[5rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto ",

        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-6 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  // header,
  // icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  descClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  descClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText("sbalvinder.fr@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* {id === 1 && (
        <div className="">

        </div>
      )} */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              // className={imgClassName}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5
          } && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
              // className={imgClassName}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-5 "
          )}
        >
          {/* text-sm md:text-sx lg:text-base */}
          <div className={`${descClassName} font-sans text-[#c1c2d3]  z-10`}>
            {description}
          </div>
          <div className={`${(id === 1)? "w-full mb-3 lg:mb-0 text-[#ececf0] lg:text-3xl text-base" :"max-w-96 lg:text-3xl text-lg"} font-sans font-bold z-10`}>
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-5 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-2">
                {techStack.left.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-2 px-3 text-xs lg:text-base  opacity-50 lg:opacity-85 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-5 px-3  rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-2">
                <span className="py-5 px-3  rounded-lg text-center bg-[#10132E]" />
                {techStack.right.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-2 px-3 text-xs lg:text-base  opacity-50 lg:opacity-85 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {isClient && copied && (
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    autoplay
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice",
                    }}
                  />
                )}

              </div>

              <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161831]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
