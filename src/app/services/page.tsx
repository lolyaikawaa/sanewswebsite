import {
  BriefcaseBusiness,
  Radio,
  Megaphone,
  Mic2,
  FileText,
  ShieldCheck,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesPage() {

  const services = [
    {
      icon: <Radio size={22} />,
      title: "Broadcast Advertisements",
      description:
        "Official public broadcast advertisements delivered directly through SANews broadcasting operations.",
      availability: "Available",
      processing: "10-30 Minutes",
    },

    {
      icon: <Megaphone size={22} />,
      title: "Paid Promotion Advertisements",
      description:
        "Official paid promotion services including Discord advertisements and public promotional publications.",
      availability: "Available",
      processing: "15-45 Minutes",
    },

    {
      icon: <Mic2 size={22} />,
      title: "Podcast Services",
      description:
        "Podcast sessions, interviews, public discussions, and official SANews media talk programs.",
      availability: "Scheduled",
      processing: "Appointment Required",
    },
  ];

  const regulations = [
    "All advertisements must follow SANews publication standards.",
    "Illegal, unrealistic, or misleading promotions are prohibited.",
    "Management reserves the right to reject inappropriate requests.",
    "All services are processed through official SANews procedures.",
  ];

  return (
    <div className="min-h-screen bg-[#dfe4e1]">

      <section className="max-w-[1600px] mx-auto px-5 py-5 space-y-5">

        <PageHero
          title="SANews Services"
          subtitle="Official public media, promotion, and broadcasting services operated by SANews."
        />

        {/* SERVICES */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Available Services"
            icon={<BriefcaseBusiness size={20} />}
          />

          <div className="p-4 space-y-4">

            {services.map((service, index) => (

              <div
                key={index}
                className="border border-[#c5ccd4] bg-white"
              >

                {/* HEADER */}

                <div className="bg-gradient-to-r from-[#eceff3] to-[#dfe5eb] border-b border-[#c9cfd6] px-4 py-3 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="text-[#c79a2b]">
                      {service.icon}
                    </div>

                    <h3 className="text-[22px] font-bold text-[#022b5b]">
                      {service.title}
                    </h3>

                  </div>

                  <div className="border border-[#8da06f] bg-[#dbe8ca] px-3 py-1">

                    <p className="text-[12px] font-bold uppercase text-[#4d6b1f]">
                      {service.availability}
                    </p>

                  </div>

                </div>

                {/* BODY */}

                <div className="grid grid-cols-[1fr_260px]">

                  <div className="p-5 border-r border-[#d5dbe2]">

                    <p className="text-[15px] leading-relaxed text-gray-700">
                      {service.description}
                    </p>

                  </div>

                  <div className="bg-[#f8fafc]">

                    <div className="border-b border-[#d5dbe2] px-4 py-3">

                      <p className="text-[11px] uppercase tracking-[1px] font-bold text-[#8b6b18]">
                        Processing Time
                      </p>

                      <p className="text-[15px] font-semibold text-[#022b5b] mt-1">
                        {service.processing}
                      </p>

                    </div>

                    <div className="px-4 py-3">

                      <p className="text-[11px] uppercase tracking-[1px] font-bold text-[#8b6b18]">
                        Service Status
                      </p>

                      <p className="text-[15px] font-semibold text-[#022b5b] mt-1">
                        Official SANews Service
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* PROCEDURE */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Service Procedure"
            icon={<FileText size={20} />}
          />

          <div className="p-4">

            <table className="w-full border-collapse">

              <tbody>

                <tr className="border border-[#c5ccd4]">

                  <td className="bg-[#e7ebef] px-4 py-3 w-[70px]">

                    <p className="text-[18px] font-bold text-[#022b5b]">
                      01
                    </p>

                  </td>

                  <td className="bg-white px-4 py-3">

                    <p className="text-[15px] text-gray-700">
                      Contact SANews management through official communication channels.
                    </p>

                  </td>

                </tr>

                <tr className="border border-[#c5ccd4]">

                  <td className="bg-[#e7ebef] px-4 py-3">

                    <p className="text-[18px] font-bold text-[#022b5b]">
                      02
                    </p>

                  </td>

                  <td className="bg-white px-4 py-3">

                    <p className="text-[15px] text-gray-700">
                      Submit detailed information regarding the requested service.
                    </p>

                  </td>

                </tr>

                <tr className="border border-[#c5ccd4]">

                  <td className="bg-[#e7ebef] px-4 py-3">

                    <p className="text-[18px] font-bold text-[#022b5b]">
                      03
                    </p>

                  </td>

                  <td className="bg-white px-4 py-3">

                    <p className="text-[15px] text-gray-700">
                      SANews management will review and approve the request.
                    </p>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* REGULATIONS */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Service Regulations"
            icon={<ShieldCheck size={20} />}
          />

          <div className="p-4 space-y-3">

            {regulations.map((rule, index) => (

              <div
                key={index}
                className="border border-[#c5ccd4] bg-white flex items-center gap-4 px-4 py-3"
              >

                <div className="w-7 h-7 bg-[#022b5b] text-white text-[13px] font-bold flex items-center justify-center">

                  {index + 1}

                </div>

                <p className="text-[15px] text-gray-700">
                  {rule}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}