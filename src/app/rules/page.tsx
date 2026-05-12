import { Shield } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export default function RulesPage() {

  const rules = [
    "All SANews members must maintain professionalism.",
    "False or misleading publications are prohibited.",
    "Toxic behavior and internal conflicts are forbidden.",
    "Broadcasts must follow official SANews standards.",
    "Management decisions are final."
  ];

  return (
    <div className="min-h-screen bg-[#eef1f4]">

      <section className="max-w-[1650px] mx-auto px-6 py-7 space-y-6">

        <PageHero
          title="SANews Regulations"
          subtitle="Official regulations and internal journalism policies."
        />

        <div className="bg-white border border-[#d7dce2] rounded-md overflow-hidden shadow-sm">

          <SectionHeader
            title="General Rules"
            icon={<Shield size={24} />}
          />

          <div className="p-8 space-y-4">

            {rules.map((rule, index) => (

              <div
                key={index}
                className="border border-[#d7dce2] bg-[#f8fafc] p-6"
              >

                <div className="flex gap-5 items-start">

                  <div className="w-10 h-10 bg-[#022b5b] text-white font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  <p className="text-lg text-gray-700">
                    {rule}
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