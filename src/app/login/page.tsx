"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {

      const { data: existing } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!existing) {

        await supabase
          .from("profiles")
          .insert([
            {
              id: user.id,
              username: user.email?.split("@")[0],
              rank: "Staff Member",
              division: "SANews Division",
            },
          ]);

      }

    }

    window.location.replace("/admin/dashboard");

  }

  return (
    <div className="min-h-screen bg-[#cfd5db]">

      {/* TOP STRIP */}

      <div className="h-[32px] bg-[#041b36] border-b border-[#2e4b69]">

        <div className="max-w-[1800px] mx-auto px-5 h-full flex items-center justify-between">

          <div className="flex items-center gap-5">

            <p className="text-[11px] uppercase tracking-[2px] text-[#d6a437] font-bold">
              SANews Internal Authentication Network
            </p>

            <div className="flex items-center gap-2">

              <div className="w-[7px] h-[7px] bg-[#78bb68]" />

              <p className="text-[11px] uppercase tracking-[1px] text-[#d7dee6]">
                Authentication Services Online
              </p>

            </div>

          </div>

          <p className="text-[11px] uppercase tracking-[1px] text-[#9eb1c4]">
            Novelty Roleplay Media Operations
          </p>

        </div>

      </div>

      {/* MAIN */}

      <div className="max-w-[1800px] mx-auto px-5 py-5">

        <div className="grid grid-cols-[430px_1fr] gap-4">

          {/* LEFT PANEL */}

          <div className="border border-[#aeb6c0] bg-[#eef1f4] h-fit">

            {/* HEADER */}

            <div className="bg-[#06264d] border-b-4 border-[#c79a2b] px-5 py-5">

              <h1 className="text-[30px] leading-none font-black text-white">
                Administrative Login
              </h1>

              <p className="text-[#d6a437] text-[11px] uppercase tracking-[3px] font-bold mt-3">
                Authorized SANews Personnel Only
              </p>

            </div>

            {/* FORM */}

            <div className="p-5 space-y-5">

              <div>

                <label className="block text-[11px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                  Administrative Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter newsroom administration email..."
                  className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px]"
                />

              </div>

              <div>

                <label className="block text-[11px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                  Secure Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure administration password..."
                  className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px]"
                />

              </div>

              <button
                onClick={handleLogin}
                className="w-full border border-[#8f6c16] bg-gradient-to-b from-[#e0b54c] to-[#c99722] py-4 text-[12px] font-black tracking-[1px] text-black"
              >
                ACCESS NEWSROOM SYSTEM
              </button>

            </div>

            {/* FOOTER */}

            <div className="border-t border-[#c5ccd4] bg-[#dde3e8] px-5 py-4">

              <p className="text-[11px] leading-relaxed text-[#5d6874]">
                Unauthorized access attempts may result in administrative suspension and permanent newsroom restriction.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-4">

            {/* MAIN INFO */}

            <div className="border border-[#aeb6c0] bg-[#eef1f4]">

              <div className="bg-[#d7dde4] border-b border-[#b7c0c9] px-5 py-4 flex items-center justify-between">

                <div>

                  <h2 className="text-[24px] font-black text-[#022b5b]">
                    SANews Operations Bulletin
                  </h2>

                  <p className="text-[11px] uppercase tracking-[2px] text-[#8b6b18] font-bold mt-2">
                    Internal Newsroom Administration System
                  </p>

                </div>

                <div className="border border-[#4b6787] bg-[#0c3768] px-4 py-3">

                  <p className="text-[10px] uppercase tracking-[1px] text-[#d6a437] font-bold">
                    Security Level
                  </p>

                  <p className="text-[13px] text-white font-semibold mt-1">
                    Restricted
                  </p>

                </div>

              </div>

              {/* CONTENT */}

              <div className="bg-white p-5 space-y-5">

                <div className="border border-[#c5ccd4]">

                  <div className="bg-[#e2e7ec] border-b border-[#c5ccd4] px-4 py-3">

                    <h3 className="text-[15px] font-black uppercase tracking-[1px] text-[#022b5b]">
                      Operational Overview
                    </h3>

                  </div>

                  <div className="p-4">

                    <p className="text-[14px] leading-relaxed text-gray-700">
                      The SANews internal newsroom system is responsible for official article publication, broadcast operations, editorial coordination, recruitment administration, and organizational media management throughout Novelty Roleplay.
                    </p>

                  </div>

                </div>

                {/* SYSTEM TABLE */}

                <div className="border border-[#c5ccd4]">

                  <table className="w-full border-collapse">

                    <tbody>

                      <tr className="border border-[#c5ccd4]">

                        <td className="bg-[#dde4ea] px-4 py-3 w-[240px] text-[11px] uppercase tracking-[1px] font-bold text-[#8b6b18]">
                          Operational Division
                        </td>

                        <td className="bg-white px-4 py-3 text-[14px] font-semibold text-[#022b5b]">
                          SANews Administration
                        </td>

                      </tr>

                      <tr className="border border-[#c5ccd4]">

                        <td className="bg-[#dde4ea] px-4 py-3 text-[11px] uppercase tracking-[1px] font-bold text-[#8b6b18]">
                          Current Status
                        </td>

                        <td className="bg-white px-4 py-3 text-[14px] font-semibold text-[#2d6a1f]">
                          Operational
                        </td>

                      </tr>

                      <tr className="border border-[#c5ccd4]">

                        <td className="bg-[#dde4ea] px-4 py-3 text-[11px] uppercase tracking-[1px] font-bold text-[#8b6b18]">
                          Access Authorization
                        </td>

                        <td className="bg-white px-4 py-3 text-[14px] font-semibold text-[#7b1d1d]">
                          Authorized Personnel Only
                        </td>

                      </tr>

                      <tr className="border border-[#c5ccd4]">

                        <td className="bg-[#dde4ea] px-4 py-3 text-[11px] uppercase tracking-[1px] font-bold text-[#8b6b18]">
                          Publication System
                        </td>

                        <td className="bg-white px-4 py-3 text-[14px] font-semibold text-[#022b5b]">
                          SANews Newsroom CMS
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

            {/* ADMINISTRATIVE NOTICE */}

            <div className="border border-[#8d2d2d] bg-[#f2dcdc]">

              <div className="bg-[#8b1d1d] border-b border-[#661313] px-5 py-3">

                <h2 className="text-[17px] uppercase tracking-[1px] font-black text-white">
                  Internal Administrative Notice
                </h2>

              </div>

              <div className="bg-white p-5">

                <p className="text-[14px] leading-relaxed text-gray-700">
                  All SANews newsroom personnel are expected to maintain publication integrity, operational professionalism, and official organizational standards while accessing administrative newsroom systems.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}