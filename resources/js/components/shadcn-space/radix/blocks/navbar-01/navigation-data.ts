import { Server, Network, ShieldCheck, Cctv, Cpu, Code } from "lucide-react";

export type NavigationItem = {
  title: string;
  href?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type NavigationSection = {
  title: string;
  href?: string;
  isActive?: boolean;
  children?: NavigationItem[];
};

export const defaultNavigationData: NavigationSection[] = [
  {
    title: "Főoldal",
    href: "#",
    isActive: true,
  },
  {
    title: "DIMOP Plusz 1.2.6/C",
    href: "#",
  },
  {
    title: "OKM Business",
    href: "#",
  },
  {
    title: "Szolgáltatások",
    children: [
      {
        title: "Szerver üzemeltetés",
        description: "Fizikai és felhőszerverek üzemeltetése, 24/7 felügyelet és mentés.",
        icon: Server,
        href: "#szerver-uzemeltetes",
      },
      {
        title: "Gyengeáramú hálózatok",
        description: "Strukturált számítógépes hálózatok, optikai és réz kábelezés.",
        icon: Network,
        href: "#gyengearamu-halozatok",
      },
      {
        title: "Beléptető rendszerek",
        description: "Korszerű kártyás és biometrikus beléptetés, munkaidő-nyilvántartás.",
        icon: ShieldCheck,
        href: "#belepteto-rendszerek",
      },
      {
        title: "Videómegfigyelő rendszerek",
        description: "Professzionális IP kamerarendszerek, távoli elérés és rögzítés.",
        icon: Cctv,
        href: "#videomegfigyelo-rendszerek",
      },
      {
        title: "Rendszergazdai megoldások",
        description: "Teljes körű vállalati IT infrastruktúra támogatás és hibaelhárítás.",
        icon: Cpu,
        href: "#rendszergazdai-megoldasok",
      },
      {
        title: "Webfejlesztés",
        description: "Modern, gyors és reszponzív weboldalak, egyedi webes alkalmazások.",
        icon: Code,
        href: "#webfejlesztes",
      },
    ],
  },
  {
    title: "Ügyfeleink",
    href: "#",
  },
];
