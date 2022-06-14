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

  // Priority Tours Menu
  {
    id: ncNanoId(),
    href: "#",
    name: "Priority Tours",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Mandalika" },
      { id: ncNanoId(), href: "/listing-stay", name: "Bali" },
      { id: ncNanoId(), href: "/listing-stay", name: "Borobudur" },
      //
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Labuan Bajo",
      },
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Cikupang",
      },
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Likupang",
      },
    ],
  },

  // Tours Type Menu
  {
    id: ncNanoId(),
    href: "#",
    name: "Tours Type",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Romance Tour" },
      { id: ncNanoId(), href: "/listing-stay", name: "Adventure Tour" },
      { id: ncNanoId(), href: "/listing-stay", name: "City Tour" },
      { id: ncNanoId(), href: "/listing-stay", name: "Sea Tour" },
    ],
  },

  // Blog Menu
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog",
  },
];
