import Link from "next/link";

import {
  UserPlus,
  ShieldCheck,
  Newspaper,
  Radio,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export default function RecruitmentPage() {

  const requirements = [
    "Maintain professionalism and maturity.",
    "Possess strong communication skills.",
    "Understand realistic roleplay standards.",
    "Remain active within SANews operations.",
    "Follow all SANews regulations and procedures.",
  ];

  const positions = [
    {
      icon: <Newspaper size={26} />,
      title: "News Reporter",
      description:
        "Responsible for journalism reporting, article writing, interviews, and newsroom publications.",
    },

    {
      icon: <Radio size={26} />,
      title: "Broadcast Staff",
      description:
        "Handles public broadcasting, live event coverage, and official city announcements.",
    },

    {
      icon: <ShieldCheck size={26} />,
      title: "Public Affairs",
      description:
        "Manages media communication, partnerships, and public relation activities.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#dfe4e1]">

      <section className="max-w-[1600px] mx-auto px-5 py-5 space-y-5">

        <PageHero
          title="SANews Recruitment"
          subtitle="Join the official journalism and broadcasting organization of Novelty Roleplay."
        />

        {/* RECRUITMENT INFO */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Recruitment Information"
            icon={<UserPlus size={22} />}
          />

          <div className="p-5">

            <div className="border border-[#c2c8d0] bg-white">

              <div className="bg-gradient-to-r from-[#eceff3] to-[#dfe5eb] border-b border-[#c9cfd6] px-4 py-3">

                <h3 className="text-[24px] font-bold text-[#022b5b]">
                  Public Recruitment Open
                </h3>

              </div>

              <div className="p-5">

                <p className="text-[15px] text-gray-700 leading-relaxed">
                  SANews is currently accepting new applicants interested in
                  journalism, broadcasting, newsroom operations,
                  and public affairs activities.
                </p>

                <div className="mt-5 space-y-3">

                  {requirements.map((requirement, index) => (

                    <div
                      key={index}
                      className="border border-[#d4d9df] bg-[#f8fafc] px-4 py-3 flex items-center gap-4"
                    >

                      <div className="w-7 h-7 bg-[#022b5b] text-white text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </div>

                      <p className="text-[15px] text-gray-700">
                        {requirement}
                      </p>

                    </div>

                  ))}

                </div>

                <Link
                  href="https://bit.ly/sanewsnvrp"
                  target="_blank"
                  className="inline-flex mt-6 bg-gradient-to-b from-[#e0b54c] to-[#c99722] border border-[#8f6c16] px-7 py-3 text-black font-bold hover:brightness-105 transition"
                >
                  Join Official Discord
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* POSITIONS */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Available Positions"
            icon={<ShieldCheck size={22} />}
          />

          <div className="p-5 grid grid-cols-3 gap-4">

            {positions.map((position, index) => (

              <div
                key={index}
                className="border border-[#c2c8d0] bg-white"
              >

                <div className="bg-gradient-to-r from-[#eceff3] to-[#dfe5eb] border-b border-[#c9cfd6] px-4 py-3 flex items-center gap-3">

                  <div className="text-[#d6a437]">
                    {position.icon}
                  </div>

                  <h3 className="text-[22px] font-bold text-[#022b5b]">
                    {position.title}
                  </h3>

                </div>

                <div className="p-5">

                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    {position.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}