import Navbar from '@/components/shadcn-space/radix/blocks/navbar-01';
import AgencyHeroSection from '@/components/shadcn-space/radix/blocks/hero-01';
import Bentogrid from '@/components/shadcn-space/radix/blocks/bento-grid-01';
import Footer from '@/components/shadcn-space/radix/blocks/footer-01';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative isolate min-h-screen overflow-x-clip bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
                <Navbar />

                {/* Full-width background gradient glow for Hero */}
                <div
                    className="pointer-events-none absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -z-10 h-[680px] md:h-[800px] w-full rounded-[100%] bg-gradient-to-r from-sky-200/70 via-white via-50% to-amber-200/40 blur-3xl opacity-60 dark:opacity-40 dark:from-slate-800/80 dark:via-black dark:to-stone-800/80"
                    aria-hidden="true"
                />

                {/* Full-width background gradient glow for Bento Grid */}
                {/* <div
                    className="pointer-events-none absolute top-[850px] md:top-[950px] left-1/2 -translate-x-1/2 -z-10 h-[700px] md:h-[850px] w-full rounded-[100%] bg-gradient-to-r from-sky-200/70 via-white via-50% to-amber-200/40 blur-3xl opacity-60 dark:opacity-40 dark:from-slate-800/80 dark:via-black dark:to-stone-800/80"
                    aria-hidden="true"
                /> */}

                <AgencyHeroSection />
                <Bentogrid />
                <Footer />
            </div>
        </>
    );
}
