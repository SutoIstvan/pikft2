"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { toUrl } from "@/lib/utils";
import { dashboard, register } from "@/routes";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

function HeroSection({ avatarList }: HeroSectionProps) {
  const { auth } = usePage().props;

  return (
    <section className="relative">
      <div className="w-full h-full relative">
        <div className="relative w-full pt-0 md:pt-16 pb-6 md:pb-10">
          <div className="w-full mx-auto relative z-10 max-w-7xl xl:px-16 lg:px-8 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column: Greeting, Text, Button */}
              <div className="flex flex-col text-left items-start gap-6">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-5xl md:text-4xl text-3xl font-medium leading-tight"
                >
                  Üdvözöljük a{" "}
                  <span className="text-[#0d6efd]">
                    Paksi Informatika
                  </span>{" "}
                  oldalán!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-base md:text-lg font-normal text-muted-foreground leading-relaxed"
                >
                  A Paksi Informatika több mint 20 éve kínál vállalati IT megoldásokat – szerverüzemeltetés, hálózatépítés, beléptető rendszerek, webfejlesztés és digitális infrastruktúra-fejlesztés pályázatokhoz is. Megbízható partner a digitalizációban!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 w-full"
                >
                  <Button asChild className="relative text-sm cursor-pointer hover:bg-primary/80 font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden">
                    <Link href={toUrl(auth?.user ? dashboard() : register())}>
                      <span className="relative z-10 transition-all duration-500">
                        Részletek
                      </span>
                      <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </Button>
                  <div className="flex items-center sm:gap-4 gap-3">
                    <ul className="avatar flex flex-row items-center">
                      {avatarList.map((avatar, index) => (
                        <li key={index} className="-mr-2 z-1 avatar-hover:ml-2">
                          <img
                            src={avatar.image}
                            alt="Avatar"
                            width={38}
                            height={38}
                            className="rounded-full border-2 border-white object-cover"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="gap-1 flex flex-col items-start">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <img
                            key={index}
                            src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                            alt="star"
                            className="h-4 w-4"
                          />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm font-normal text-muted-foreground">
                        100+ ügyfél bízik bennünk
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
                className="relative flex items-center justify-center w-full"
              >
                <img
                  src="/szerverek_webfejlesztes_beleptetes_2.png"
                  alt="Szerverek, webfejlesztés, beléptetés - Paksi Informatika"
                  className="w-full h-auto max-h-[500px] object-contain opacity-85"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
