"use client";
import { Check, Fingerprint, Globe, IdCard, KeyRound, LucideIcon, Wrench, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Item = {
  id: string;
  title: string;
  icon: LucideIcon;
};

const DATA: Item[] = [
  // {
  //   id: "1",
  //   title: "Biztonsági követelmények felmérése",
  //   icon: Route,
  // },
  {
    id: "2",
    title: "RFID kártyás rendszerek",
    icon: IdCard,
  },
  {
    id: "3",
    title: "Biometrikus rendszerek",
    icon: Fingerprint,
  },
  {
    id: "4",
    title: "PIN kódos rendszerek",
    icon: KeyRound,
  },
  {
    id: "5",
    title: "Távoli hozzáférés és felügyelet",
    icon: Globe,
  },
  {
    id: "6",
    title: "Rendszeres karbantartás",
    icon: Wrench,
  },
  {
    id: "7",
    title: "Gyors hibaelhárítás",
    icon: Zap,
  },
];

export default function ReminderCarousel() {
  const [visible, setVisible] = useState<Item[]>(DATA.slice(0, 3));
  const [pointer, setPointer] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => {
        const nextIndex = (pointer + 1) % DATA.length;
        setPointer(nextIndex);
        return [...prev.slice(1), DATA[nextIndex]];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [pointer]);

  return (
    <div className="relative flex flex-col items-center rounded-2xl h-52 w-full overflow-hidden">
      <AnimatePresence initial={false}>
        {visible.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ y: 215, opacity: 0, scale: 0.9 }}
            animate={{
              y: i * 70,
              scale: i === 1 ? 1 : 0.9,
              opacity: i === 1 ? 1 : 0.5,
            }}
            exit={{ y: -100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute flex items-center justify-between w-full px-5 py-4 rounded-xl bg-background border border-border text-card-foreground">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <Check size={20} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
