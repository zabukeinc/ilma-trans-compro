import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

export const NAVIGATIONS: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    // type: "dropdown",
    // children: demoChildMenus,
  },

  // Destinations Menu
  {
    id: ncNanoId(),
    href: "#",
    name: "Destination",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "DKI Jakarta" },
      { id: ncNanoId(), href: "/listing-stay", name: "Jawa Barat" },
      { id: ncNanoId(), href: "/listing-stay", name: "Jawa Tengah" },
      //
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Jawa Timur",
      },
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "DI Yogyakarta",
      },
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Sumatra",
      },
      //
      { id: ncNanoId(), href: "/listing-stay", name: "Kalimantan" },
      { id: ncNanoId(), href: "/listing-stay", name: "Sulawesi" },
      { id: ncNanoId(), href: "/listing-stay", name: "Bali" },
      { id: ncNanoId(), href: "/listing-stay", name: "NTB" },
      { id: ncNanoId(), href: "/listing-stay", name: "NTT" },
    ],
  },

  // Blog Menu
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog",
  },
];
