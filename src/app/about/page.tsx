import {
  Building2,
  ShieldCheck,
  Radio,
  Newspaper,
  BriefcaseBusiness,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutPage() {

  const sections = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Professional Journalism",
      text: "SANews follows professional journalism standards focused on credibility, verified reporting, and responsible media publication."
    },
    {
      icon: <Radio size={28} />,
      title: "Broadcast Operations",
      text: "Official live coverage, city broadcasts, interviews, and press conferences are managed directly by SANews operational teams."
    },
    {
      icon: <Newspaper size={28} />,
      title: "Newsroom Publications",
      text: "The SANews newsroom system handles reports, investigative articles, interviews, and official media statements."
    },
    {
      icon: <BriefcaseBusiness size={28} />,
      title: "Public Services",
      text: "SANews provides paid promotion, media partnerships, event publications, and public advertising services."
    },
  ];

  return (
    <div className="min-h-screen bg-[#dfe4e1]">

      <section className="max-w-[1600px] mx-auto px-5 py-5 space-y-5">

        <PageHero
          title="About SANews"
          subtitle="Official journalism and broadcasting organization operating within Novelty Roleplay."
        />

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Organization Overview"
            icon={<Building2 size={22} />}
          />

          <div className="p-5">

            <div className="border border-[#c2c8d0] bg-white p-5">

              <p className="text-[17px] leading-relaxed text-gray-700">
                SANews operates as an official media organization focused on
                public reporting, live broadcasting, newsroom journalism,
                press conference management, and city-wide media services.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

              {sections.map((section, index) => (

                <div
                  key={index}
                  className="border border-[#c2c8d0] bg-white"
                >

                  <div className="bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] border-b border-[#cbd1d8] px-4 py-3 flex items-center gap-3">

                    <div className="text-[#d6a437]">
                      {section.icon}
                    </div>

                    <h3 className="text-[21px] font-bold text-[#022b5b]">
                      {section.title}
                    </h3>

                  </div>

                  <div className="p-4">

                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      {section.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}