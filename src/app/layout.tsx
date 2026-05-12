import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "@/components/providers/AuthProvider";

export const metadata: Metadata = {
  title: "SANews Official Media Network",
  description:
    "Official SANews journalism, broadcasting, and newsroom network for Novelty Roleplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="bg-[#cfd5db] text-black">

        <AuthProvider>

          <div className="min-h-screen flex flex-col">

            {/* NAVBAR */}

            <Navbar />

            {/* PAGE CONTENT */}

            <main className="flex-1">
              {children}
            </main>

            {/* FOOTER */}

            <footer className="border-t-4 border-[#c79a2b] bg-[#06264d] mt-10">

              <div className="max-w-[1700px] mx-auto px-5 py-10">

                <div className="grid grid-cols-3 gap-10">

                  {/* LEFT */}

                  <div>

                    <h2 className="text-[28px] font-black text-white">
                      SANews
                    </h2>

                    <p className="text-[#d6a437] text-[11px] uppercase tracking-[3px] font-bold mt-2">
                      Official Media Network
                    </p>

                    <p className="text-[#cfd8e2] text-[14px] leading-relaxed mt-5">
                      SANews is an official journalism and broadcasting organization
                      operating within Novelty Roleplay, responsible for newsroom
                      operations, public broadcasting, media publication, and
                      organizational communications.
                    </p>

                  </div>

                  {/* CENTER */}

                  <div>

                    <h3 className="text-[18px] font-black text-white uppercase tracking-[1px]">
                      Network Navigation
                    </h3>

                    <div className="mt-5 space-y-3">

                      <p className="text-[#d8e0e8] text-[13px]">
                        Home
                      </p>

                      <p className="text-[#d8e0e8] text-[13px]">
                        About
                      </p>

                      <p className="text-[#d8e0e8] text-[13px]">
                        Structure
                      </p>

                      <p className="text-[#d8e0e8] text-[13px]">
                        Rules
                      </p>

                      <p className="text-[#d8e0e8] text-[13px]">
                        Services
                      </p>

                      <p className="text-[#d8e0e8] text-[13px]">
                        Recruitment
                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div>

                    <h3 className="text-[18px] font-black text-white uppercase tracking-[1px]">
                      Operational Status
                    </h3>

                    <div className="mt-5 border border-[#35506f] bg-[#041b36] p-5">

                      <div className="flex items-center gap-3">

                        <div className="w-[10px] h-[10px] bg-[#74bf68]" />

                        <p className="text-[13px] uppercase tracking-[1px] text-white font-bold">
                          Systems Operational
                        </p>

                      </div>

                      <p className="text-[#cfd8e2] text-[13px] leading-relaxed mt-4">
                        SANews newsroom operations, publication systems,
                        broadcasting services, and administrative systems are
                        currently operating normally.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* BOTTOM */}

              <div className="border-t border-[#35506f] bg-[#041b36]">

                <div className="max-w-[1700px] mx-auto px-5 h-[46px] flex items-center justify-between">

                  <p className="text-[11px] uppercase tracking-[1px] text-[#9eb1c4]">
                    © 2026 SANews Official Media Network
                  </p>

                  <p className="text-[11px] uppercase tracking-[1px] text-[#9eb1c4]">
                    Novelty Roleplay Journalism Division
                  </p>

                </div>

              </div>

            </footer>

          </div>

        </AuthProvider>

      </body>

    </html>
  );
}