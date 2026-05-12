"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  usePathname,
} from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function Navbar() {

  const pathname = usePathname();

  const [user, setUser] = useState<any>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    setMounted(true);

    async function loadUser() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

    }

    loadUser();

    const {
      data: listener,
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user ?? null);

      }
    );

    return () => {

      listener.subscription.unsubscribe();

    };

  }, []);

  async function handleLogout() {

    await supabase.auth.signOut();

    window.location.replace("/");

  }

  const links = [
    {
      name: "HOME",
      href: "/",
    },

    {
      name: "ABOUT",
      href: "/about",
    },

    {
      name: "STRUCTURE",
      href: "/structure",
    },

    {
      name: "RULES",
      href: "/rules",
    },

    {
      name: "SERVICES",
      href: "/services",
    },

    {
      name: "RECRUITMENT",
      href: "/recruitment",
    },

    {
      name: "NEWSROOM",
      href: "/newsroom",
    },

    {
      name: "GALLERY",
      href: "/gallery",
    },
  ];

  return (
    <header className="border-b-4 border-[#c79a2b] bg-[#06264d]">

      {/* TOP STRIP */}

      <div className="border-b border-[#35506f] bg-[#041b36]">

        <div className="max-w-[1700px] mx-auto px-5 h-[34px] flex items-center justify-between">

          {/* LEFT */}

          <div className="flex items-center gap-6">

            <p className="text-[11px] uppercase tracking-[2px] text-[#d6a437] font-bold">
              SANews Official Journalism Network
            </p>

            <p className="text-[11px] uppercase tracking-[1px] text-[#c8d1db]">
              Novelty Official Discord
            </p>

            <p className="text-[11px] uppercase tracking-[1px] text-[#c8d1db]">
              Network Broadcast Services
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-2">

            <div className="w-[7px] h-[7px] bg-[#7cc56b]" />

            <p className="text-[11px] uppercase tracking-[1px] text-[#d8e0e8]">
              Network Operational
            </p>

          </div>

        </div>

      </div>

      {/* MAIN NAVIGATION */}

      <div className="max-w-[1700px] mx-auto px-5">

        <div className="h-[84px] flex items-center justify-between">

          {/* LEFT LOGO */}

          <Link
            href="/"
            className="flex items-center gap-4 pr-10"
          >

            <div className="w-[58px] h-[58px] border border-[#c79a2b] bg-[#0b2f59] flex items-center justify-center p-2">

              <img
                src="/logo.png"
                alt="SANews Logo"
                className="w-full h-full object-contain opacity-90"
              />

            </div>

            <div>

              <h1 className="text-[34px] leading-none font-black tracking-tight text-white">
                SANews
              </h1>

              <p className="text-[11px] uppercase tracking-[3px] text-[#d6a437] font-bold mt-1">
                Official Media Network
              </p>

            </div>

          </Link>

          {/* RIGHT SIDE */}

          <div className="flex items-center h-full">

            {/* NAVIGATION */}

            <nav className="flex items-center h-full border-l border-[#35506f]">

              {links.map((link, index) => (

                <Link
                  key={index}
                  href={link.href}
                  className="h-[84px] px-6 border-r border-[#35506f] flex items-center text-[12px] font-black tracking-[1px] text-[#d8e0e8] hover:bg-[#0d3768] hover:text-white transition-all"
                >
                  {link.name}
                </Link>

              ))}

            </nav>

            {/* AUTH */}

            {mounted && (

              user ? (

                <div className="h-[84px] border-r border-[#35506f] bg-[#08284d] px-6 flex items-center gap-6">

                  {/* INFO */}

                  <div className="min-w-[220px]">

                    <p className="text-[9px] uppercase tracking-[1px] text-[#d6a437] font-bold">
                      SANews Internal Personnel
                    </p>

                    <p className="text-[13px] text-white font-semibold mt-1">
                      SANews Staff Authorized
                    </p>

                    <p className="text-[9px] uppercase tracking-[1px] text-[#8ea6bf] mt-1">
                      Authorized Newsroom Access
                    </p>

                  </div>

                  {/* BUTTONS */}

                  <div className="flex flex-col gap-2">

                    <Link
                      href="/admin/dashboard"
                      className="text-[10px] uppercase tracking-[1px] text-[#d6a437] hover:text-white"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="text-left text-[10px] uppercase tracking-[1px] text-[#d6a437] hover:text-white"
                    >
                      Logout
                    </button>

                  </div>

                </div>

              ) : (

                pathname !== "/login" && (

                  <Link
                    href="/login"
                    className="h-[84px] px-8 border-r border-[#35506f] flex items-center text-[11px] uppercase tracking-[1px] font-black text-[#d6a437] hover:bg-[#0d3768] hover:text-white transition-all"
                  >
                    Administrator Login
                  </Link>

                )

              )

            )}

          </div>

        </div>

      </div>

    </header>
  );
}