"use client";

import { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { cn, toUrl } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Icon } from "@iconify/react";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link, usePage } from "@inertiajs/react";
import { dashboard, login, register } from "@/routes";
import {
  defaultNavigationData,
  type NavigationSection,
} from "./navigation-data";

type NavbarProps = {
  navigationData?: NavigationSection[];
  className?: string;
};

const CollaborateButton = ({
  className,
  href,
  label,
}: {
  className?: string;
  href: string;
  label: string;
}) => (
  <Button
    asChild
    className={cn(
      "relative text-sm font-medium rounded-full cursor-pointer hover:bg-primary/80 h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden",
      className
    )}
  >
    <Link href={href}>
      <span className="relative z-10 transition-all duration-500">
        {label}
      </span>
      <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  </Button>
);

export default function Navbar({
  navigationData = defaultNavigationData,
  className,
}: NavbarProps) {
  const { auth } = usePage().props;
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <>
      {/* Spacer to prevent content from jumping under fixed header */}
      <div className="h-20 w-full" aria-hidden="true" />

      <motion.header
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 px-4 flex items-center justify-center h-20 pointer-events-none",
          className,
        )}
      >
        <div
          className={cn(
            "w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-300 pointer-events-auto rounded-full p-2.5",
            sticky
              ? "bg-background/80 backdrop-blur-lg border border-border/50 shadow-lg shadow-black/5 dark:shadow-white/5"
              : "bg-transparent border border-transparent",
          )}
        >
          {/* Logo */}
          <div>
            <Link href="/">
              <Logo className="gap-3" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div>
            <NavigationMenu viewport={false} className="max-lg:hidden bg-muted p-0.5 rounded-full">
              <NavigationMenuList className="flex gap-0">
                {navigationData.map((navItem) =>
                  navItem.children && navItem.children.length > 0 ? (
                    <NavigationMenuItem key={navItem.title} className="relative">
                      <NavigationMenuTrigger
                        className={cn(
                          "px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline-none hover:outline-border hover:shadow-xs transition tracking-normal bg-transparent focus:bg-background data-[state=open]:bg-background data-[state=open]:text-foreground h-auto border-none shadow-none cursor-pointer focus-visible:ring-0",
                          navItem.isActive ? "bg-background text-foreground" : ""
                        )}
                      >
                        {navItem.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="md:left-1/2 md:-translate-x-1/2 w-[360px] md:w-[620px] p-3.5 bg-popover/95 backdrop-blur-md border border-border/80 shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-2.5 z-50">
                        {navItem.children.map((subItem) => (
                          <NavigationMenuLink
                            asChild
                            key={subItem.title}
                            className="!flex !flex-row items-start p-3"
                          >
                            <a
                              href={subItem.href || "#"}
                              className="group/item !flex !flex-row items-start gap-3.5 p-3 rounded-xl transition-all duration-200 hover:bg-muted focus:bg-muted outline-none"
                            >
                              {subItem.icon && (
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                                  <subItem.icon className="size-5" />
                                </div>
                              )}
                              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                <div className="text-sm font-semibold leading-tight text-foreground group-hover/item:text-primary transition-colors flex items-center justify-between">
                                  <span>{subItem.title}</span>
                                  <ArrowUpRight className="size-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-primary shrink-0 ml-1" />
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground mt-0.5">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuLink
                        href={navItem.href || "#"}
                        className={cn(
                          "px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal",
                          navItem.isActive ? "bg-background text-foreground" : ""
                        )}
                      >
                        {navItem.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center gap-3">
            <CollaborateButton
              className="hidden lg:flex"
              href={toUrl(register())}
              label="Kapcsolat"
            />

            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger id="mobile-menu-trigger">
                  <span className="rounded-full border border-border p-2 block">
                    <Menu
                      width={20}
                      height={20}
                    />
                    <span className="sr-only">Menu</span>
                  </span>
                </SheetTrigger>

                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full sm:w-96 p-0 border-l-0"
                >
                  <div className="flex items-center justify-between p-6">
                    <Link href="/">
                      <Logo className="gap-2" />
                    </Link>
                    <SheetClose id="mobile-menu-close">
                      <span className="rounded-full border border-border p-2.5 block">
                        <X width={16} height={16} />
                      </span>
                    </SheetClose>
                  </div>

                  <div className="flex flex-col gap-12 px-6 pb-6 overflow-y-auto">
                    <div className="flex flex-col gap-8">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <NavigationMenu
                        orientation="vertical"
                        className="items-start flex-none w-full"
                      >
                        <NavigationMenuList className="flex flex-col items-start gap-3 w-full">
                          {navigationData.map((item) =>
                            item.children && item.children.length > 0 ? (
                              <Collapsible key={item.title} className="w-full">
                                <CollapsibleTrigger className="group/trigger flex w-full items-center justify-between py-1 text-2xl font-semibold tracking-tight text-muted-foreground hover:text-foreground transition-all cursor-pointer">
                                  <span className="flex items-center">
                                    <div
                                      className={cn(
                                        "h-0.5 bg-primary transition-all duration-300 overflow-hidden",
                                        item.isActive
                                          ? "w-4 mr-2 opacity-100"
                                          : "w-0 opacity-0 group-hover/trigger:w-4 group-hover/trigger:mr-2 group-hover/trigger:opacity-100"
                                      )}
                                    />
                                    {item.title}
                                  </span>
                                  <ChevronDown className="size-5 transition-transform duration-200 group-data-[state=open]/trigger:rotate-180" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pt-2 pl-2 flex flex-col gap-1.5">
                                  {item.children.map((subItem) => (
                                    <a
                                      key={subItem.title}
                                      href={subItem.href || "#"}
                                      className="group/sub !flex !flex-row items-start gap-3.5 py-2.5 px-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                                    >
                                      {subItem.icon && (
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                                          <subItem.icon className="size-4.5" />
                                        </div>
                                      )}
                                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                        <span className="text-sm font-semibold group-hover/sub:text-primary transition-colors">
                                          {subItem.title}
                                        </span>
                                        {subItem.description && (
                                          <span className="text-xs text-muted-foreground/80 line-clamp-2">
                                            {subItem.description}
                                          </span>
                                        )}
                                      </div>
                                    </a>
                                  ))}
                                </CollapsibleContent>
                              </Collapsible>
                            ) : (
                              <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink
                                  href={item.href || "#"}
                                  className={cn(
                                    "group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
                                    item.isActive
                                      ? "text-primary"
                                      : "text-muted-foreground hover:text-foreground hover:translate-x-2",
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "h-0.5 bg-primary transition-all duration-300 overflow-hidden",
                                      item.isActive
                                        ? "w-4 mr-2 opacity-100"
                                        : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100",
                                    )}
                                  />
                                  {item.title}
                                </NavigationMenuLink>
                              </NavigationMenuItem>
                            )
                          )}
                        </NavigationMenuList>
                      </NavigationMenu>

                      <div className="flex flex-col gap-3 w-fit">
                        {auth?.user ? (
                          <CollaborateButton
                            href={toUrl(dashboard())}
                            label="Dashboard"
                          />
                        ) : (
                          <>
                            <Link
                              href={toUrl(login())}
                              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Log in
                            </Link>
                            <CollaborateButton
                              href={toUrl(register())}
                              label="Get Started"
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                      <div className="flex gap-3">
                        {[
                          "lucide:dribbble",
                          "lucide:instagram",
                          "lucide:twitter",
                          "lucide:linkedin",
                        ].map((icon) => (
                          <a
                            key={icon}
                            href="#"
                            className="flex items-center justify-center rounded-full outline outline-border hover:bg-muted transition p-3 shadow-xs"
                          >
                            <Icon icon={icon} width={16} height={16} />
                          </a>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground">
                        © 2026 Paksi Informatika
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
