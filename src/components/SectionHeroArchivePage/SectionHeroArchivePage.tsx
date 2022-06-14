import React, { FC, ReactNode } from "react";
import  {
  SearchTab,
} from "components/HeroSearchForm/HeroSearchForm";

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stay" | "Experiences" | "Rental car";
  currentTab: SearchTab;
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab,
}) => {
  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            Kuta, Bali
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5">Bali, Indonesia </span>
            <span className="mx-5"></span>
            {listingType ? (
              listingType
            ) : false}
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={'https://chisnghiax.com/chisfis/static/media/hero-right2.48e4cfddb1d4706b7139.png'} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
