import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { Helmet } from "react-helmet";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Bali",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://wallpaperaccess.com/full/537876.jpg",
  },
  {
    id: "2",
    href: "#",
    name: "DKI Jakarta",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://cdn.99images.com/photos/wallpapers/travel-world/indonesia%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-jeusc.jpg",
  },
  {
    id: "2",
    href: "#",
    name: "Labuan Bajo",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/gettyimages-1186899693.jpg?w=1600&h=1070",
  },
  {
    id: "2",
    href: "#",
    name: "NTT",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/11-hal-seru-ini-wajib-dicoba-saat-berkunjung-ke-ntt-nggak-akan-kecewa/padar-rinca-kanawa.jpg",
  },
  {
    id: "2",
    href: "#",
    name: "Bandung",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/destinations-thumbnail/Bandung-Thumbnail.jpg",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "#",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "#",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "#",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "#",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>IlmaTrans | Travel Agency</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-28 pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS}  />

        {/* SECTION2 */}
        <SectionOurFeatures />

        {/* SECTION */}
        <SectionHowItWork />

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
          />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
