"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { use, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSession } from "next-auth/react";
import Profile from "../Profile";
import { useSearchParams, useRouter } from "next/navigation";
import LoginModal from "../LoginModal";
import { ModeToggle } from "@/components/ui/ModeToggle";


interface Props {
  searchParamsPromise: Promise<{
    loginRequired?: string;
  }>;
}

export function LandingNavbar({ searchParamsPromise }: Props) {
  const searchParams = use(searchParamsPromise);
  const loginRequired = searchParams?.loginRequired === "true";
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Open modal if ?loginRequired=true
  useEffect(() => {
    if (loginRequired) {
      setOpen(true);

      // Clean the URL after opening
      const params = new URLSearchParams(searchParams.toString());
      params.delete("loginRequired");

      const newUrl =
        window.location.pathname + (params.toString() ? `?${params}` : "");
      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, router]);
  const { data: session } = useSession();
  const navItems = [
    {
      name: "Collection",
      link: "/self-help",
    },
    {
      name: "Chat",
      link: "/chat",
    },
    {
      name: "Mood Tracker",
      link: "/user/me",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && <LoginModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="relative w-full"
      >
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
            <ModeToggle />
           {session ? (
           <Profile />
           ) : (
           <NavbarButton
           onClick={() => setOpen(true)}
           variant="primary"
           className="rounded-4xl"
          >
            Login
            </NavbarButton>
            )}
            </div>

          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <div className="flex items-center gap-4">
                 <ModeToggle />
                 {session ? (
                < Profile />
                 ) : (
                <NavbarButton
                 onClick={() => setOpen(true)}
                variant="primary"
                className="rounded-4xl"
               >
               Login
              </NavbarButton>
               )}
              </div>

            </MobileNavHeader>
          </MobileNav>
        </Navbar>
      </motion.div>
    </>
  );
}
