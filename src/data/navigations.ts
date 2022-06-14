import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog Single",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing-1",
    name: "Add Listings",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing-1",
        name: "Add Listings 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-2",
        name: "Add Listings 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-3",
        name: "Add Listings 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-4",
        name: "Add Listings 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-5",
        name: "Add Listings 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-6",
        name: "Add Listings 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-7",
        name: "Add Listings 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-8",
        name: "Add Listings 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-9",
        name: "Add Listings 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-10",
        name: "Add Listings 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
  //
  { id: ncNanoId(), href: "/author", name: "Author Page" },
  { id: ncNanoId(), href: "/account", name: "Account Page" },
];

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
      { id: ncNanoId(), href: "/dki", name: "DKI Jakarta" },
      { id: ncNanoId(), href: "/jawa-barat", name: "Jawa Barat" },
      { id: ncNanoId(), href: "/jawa-tengah", name: "Jawa Tengah" },
      //
      {
        id: ncNanoId(),
        href: "/jawa-timur",
        name: "Jawa Timur",
      },
      {
        id: ncNanoId(),
        href: "/DIY",
        name: "DI Yogyakarta",
      },
      {
        id: ncNanoId(),
        href: "/Sumatra",
        name: "Sumatra",
      },
      //
      { id: ncNanoId(), href: "/kalimantan", name: "Kalimantan" },
      { id: ncNanoId(), href: "/sulawesi", name: "Sulawesi" },
      { id: ncNanoId(), href: "/bali", name: "Bali" },
      { id: ncNanoId(), href: "/ntb", name: "NTB" },
      { id: ncNanoId(), href: "/ntt", name: "NTT" },
    ],
  },

  // Priority Tours Menu
  {
    id: ncNanoId(),
    href: "#",
    name: "Priority Tours",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/mandalika", name: "Mandalika" },
      { id: ncNanoId(), href: "/bali", name: "Bali" },
      { id: ncNanoId(), href: "/borobudur", name: "Borobudur" },
      //
      {
        id: ncNanoId(),
        href: "/labuan-bajo",
        name: "Labuan Bajo",
      },
      {
        id: ncNanoId(),
        href: "/danau-toba",
        name: "Cikupang",
      },
      {
        id: ncNanoId(),
        href: "/likupang",
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
      { id: ncNanoId(), href: "/romance-tour", name: "Romance Tour" },
      { id: ncNanoId(), href: "/adventure-tour", name: "Adventure Tour" },
      { id: ncNanoId(), href: "/city-tour", name: "City Tour" },
      { id: ncNanoId(), href: "/sea-tour", name: "Sea Tour" },
    ],
  },

  // Blog Menu
  {
    id: ncNanoId(),
    href: "/articles",
    name: "Blog",
  },
];
