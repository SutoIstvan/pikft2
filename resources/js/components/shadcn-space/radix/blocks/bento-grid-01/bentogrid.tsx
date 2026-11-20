import { Badge } from "@/components/ui/badge";
import ReminderAnimation from "@/components/shadcn-space/radix/blocks/bento-grid-01/ReminderAnimation";
import AnimatedUiBlock from "@/components/shadcn-space/radix/blocks/bento-grid-01/AnimatedUiBlock";
import { motion } from "motion/react";

const Bentogrid = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="py-11 md:py-20">
        <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm font-normal">
                Kiemelt szolgáltatások
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              className="text-center md:text-4xl text-3xl mx-auto font-medium"
            >
              Megbízható megoldások vállalkozása hatékony működéséért.
            </motion.h2>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              className="lg:col-span-4 col-span-12 overflow-hidden"
            >
              <div className="rounded-xl border border-border h-full transition-all duration-300 hover:border-border/80 hover:shadow-md">
                <div className="bg-muted rounded-t-xl py-8 px-9 relative">
                  <ReminderAnimation />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Beléptető rendszerek
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Elektronikus beléptető rendszerek telepítése és karbantartása.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="lg:col-span-8 col-span-12 overflow-hidden"
            >
              <div className="rounded-xl border border-border h-full transition-all duration-300 hover:border-border/80 hover:shadow-md">
                <div className="bg-muted rounded-t-xl py-7 lg:px-30 px-6 relative">
                  <AnimatedUiBlock />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Webfejlesztés - Modern megoldások minden platformra
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Egyedi webes alkalmazások, webáruházak és digitális megoldások fejlesztése. Mobilra optimalizált, gyors és biztonságos rendszerek.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              className="lg:col-span-4 col-span-12 overflow-hidden"
            >
              <div className="rounded-xl border border-border h-full flex flex-col transition-all duration-300 hover:border-border/80 hover:shadow-md">
                <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
                  <img
                    src="/services/szerver_uzemeltetes.png"
                    alt="Szerver üzemeltetés - Megbízhatóság és stabilitás."
                    className="dark:hidden"
                  />
                  <img
                    src="/services/szerver_uzemeltetes.png"
                    alt="Szerver üzemeltetés - Megbízhatóság és stabilitás."
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Szerver üzemeltetés
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Szerverek és kliensek menedzsmentje, rendszergazdai feladatok.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="lg:col-span-4 col-span-12 overflow-hidden"
            >
              <div className="rounded-xl border border-border h-full flex flex-col transition-all duration-300 hover:border-border/80 hover:shadow-md">
                <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
                  <img
                    src="/services/videomegfigyelo_rendszerek.png"
                    alt="Videómegfigyelő rendszerek - Biztonság és megfigyelés."
                    className="dark:hidden"
                  />
                  <img
                    src="/services/videomegfigyelo_rendszerek.png"
                    alt="Videómegfigyelő rendszerek - Biztonság és megfigyelés."
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Videómegfigyelő rendszerek
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Biztonsági kamerák telepítése, távfelügyeleti rendszerek kialakítása.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="lg:col-span-4 col-span-12 overflow-hidden"
            >
              <div className="rounded-xl border border-border h-full flex flex-col transition-all duration-300 hover:border-border/80 hover:shadow-md">
                <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center relative">
                  <img
                    src="/services/gyengearamu_halozatok.png"
                    alt="Hálózattervezés és telepítés, kábelezés, kapcsolók és routerek konfigurálása."
                    className="dark:hidden"
                  />
                  <img
                    src="/services/gyengearamu_halozatok.png"
                    alt="Hálózattervezés és telepítés, kábelezés, kapcsolók és routerek konfigurálása."
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Gyengeáramú hálózatok
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Hálózattervezés és telepítés, kábelezés, kapcsolók és routerek konfigurálása.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
