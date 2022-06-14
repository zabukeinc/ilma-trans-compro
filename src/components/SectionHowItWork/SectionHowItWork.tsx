import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
// import HIW1img from "images/HIW1.png";
// import HIW2img from "images/HIW2.png";
// import HIW3img from "images/HIW3.png";
import VectorImg from "images/VectorHIW.svg";

export interface SectionHowItWorkProps {
  className?: string;
}

const DEMO_DATA = [
  {
    id: 1,
    img: 'https://chisnghiax.com/chisfis/static/media/HIW1.bbef046fd6951afd08a7.png',
    title: "Book & relax",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 2,
    img: 'https://chisnghiax.com/chisfis/static/media/HIW2.f68577684c76e764a351.png',
    title: "Smart checklist",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 3,
    img: 'https://chisnghiax.com/chisfis/static/media/HIW3.b650d652a9db697619b9.png',
    title: "Save more",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc="Keep calm & travel on">
        How it work
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {DEMO_DATA.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <NcImage
              containerClassName="mb-8 max-w-[200px] mx-auto"
              src={item.img}
            />
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
