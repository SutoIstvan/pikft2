import HeroSection from "@/components/shadcn-space/radix/blocks/hero-01/hero";
import BrandSlider, { BrandList } from "@/components/shadcn-space/radix/blocks/hero-01/brand-slider";
import type { AvatarList } from "@/components/shadcn-space/radix/blocks/hero-01/hero";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
    },
  ];

  const brandList: BrandList[] = [
    {
      image: "/brand/mvp_2.png",
      lightimg: "/brand/mvp_2.png",
      name: "Modern Vállalkozások Programja",
    },
    {
      image: "/brand/dell.jpg",
      lightimg: "/brand/dell.jpg",
      name: "Dell authorized partners",
    },
    {
      image: "/brand/microsoft.png",
      lightimg: "/brand/microsoft.png",
      name: "Microsoft partner",
    },
    // {
    //   image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
    //   lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg",
    //   name: "Brand 4",
    // },
    // {
    //   image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
    //   lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg",
    //   name: "Brand 5",
    // },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <main className="relative">
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
