import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
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
      </div>
    </div>
  );
}

export default PageHome;
