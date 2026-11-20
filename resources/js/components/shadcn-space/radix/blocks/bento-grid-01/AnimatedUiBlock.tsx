"use client";
import { motion } from "motion/react";
import { Code2, Database, Globe, ShieldCheck, ShoppingCart, Smartphone, Zap } from "lucide-react";

export default function AnimatedUiBlock() {
    return (
        <>
            <div className="min-h-[216px] flex items-center justify-center relative">
                <span className="flex items-center justify-center">
                    <img alt="shadcn dark logo" src="/pikft_logo_7.png" width={126} height={126} />
                </span>
                <motion.div
                    className="absolute start-[70%] top-0 z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}>
                    <span aria-label="Web Development" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <Code2 size={32} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute start-[91%] top-[28%] z-10"
                    animate={{
                        y: [15, -15, 15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}>
                    <span aria-label="Mobile Responsive" className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background">
                        <Smartphone size={24} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute start-[78%] top-[61%] z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 1
                    }}>
                    <span aria-label="Security" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <ShieldCheck size={36} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute end-[78%] top-0"
                    animate={{
                        y: [15, -15, 15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}>
                    <span aria-label="Speed & Performance" className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background">
                        <Zap size={20} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute end-[67%] lg:top-[61%] top-[80%] z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.2
                    }}>
                    <span aria-label="E-commerce" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <ShoppingCart size={32} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute lg:end-[98%] end-[80%] lg:top-0 top-[30%]"
                    animate={{
                        y: [15, -15, 15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.5
                    }}>
                    <span aria-label="Web Platforms" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <Globe size={32} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute end-[95%] top-[67%] z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.7
                    }}>
                    <span aria-label="Database & Backend" className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background">
                        <Database size={22} />
                    </span>
                </motion.div>
            </div >
        </>
    )
}