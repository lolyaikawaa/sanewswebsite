import {
  Shield,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export default function StructurePage() {

  const highCommand = [
    ["Commissioner", "Ailaa Redfield"],
    ["Vice Commissioner", "Marchie Hogwarts"],
    ["Assistant Commissioner", "Rubyccino Stellar"],
    ["CEO", "Mako Navarro"],
    ["Vice CEO", "Keizaki Glenharts"],
    ["Public Affairs Director", "Ethan Caldwell"],
    ["Media Operations Director", "Gabe Hawthorne"],
  ];

  const supervisors = [
    ["Lead Supervisor", "Caelyn Delouvre"],
    ["Assistant Commissioner", "Aletha Navarro"],
    ["General Supervisor", "Vinz Elliason"],
    ["General Supervisor", "Jefferson Ethereal"],
  ];

  const operational = [
    [
      "Senior Staff",
      "Vacant",
      "Operational Team",
    ],

    [
      "Junior Staff",
      "Gin Gehenna",
      "Editorial Division",
    ],

    [
      "Internship Staff",
      "Michie Delouvre",
      "Human Resource Division",
    ],

    [
      "Internship Staff",
      "Nathaniel Hathaway",
      "Public Affairs Division",
    ],

    [
      "Academy Staff",
      "Riji Cassanova",
      "Editorial Division",
    ],

    [
      "Academy Staff",
      "Elaine Celestia",
      "Human Resource Division",
    ],
  ];

  const divisions = [
    "Human Resource Division",
    "Editorial Division",
    "Public Affairs Division",
  ];

  return (
    <div className="min-h-screen bg-[#dfe4e1]">

      <section className="max-w-[1600px] mx-auto px-5 py-5 space-y-5">

        <PageHero
          title="SANews Organizational Structure"
          subtitle="Official leadership hierarchy, operational teams, and internal divisions of SANews."
        />

        {/* HIGH COMMAND */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="High Command Team"
            icon={<Shield size={20} />}
          />

          <div className="p-4">

            <table className="w-full border-collapse">

              <tbody>

                {highCommand.map(([rank, name], index) => (

                  <tr
                    key={index}
                    className="border border-[#c5ccd4]"
                  >

                    <td className="bg-[#e7ebef] px-4 py-3 w-[35%]">

                      <p className="text-[#8b6b18] uppercase tracking-[1px] text-[12px] font-bold">
                        {rank}
                      </p>

                    </td>

                    <td className="bg-white px-4 py-3">

                      <h3 className="text-[20px] font-bold text-[#022b5b]">
                        {name}
                      </h3>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* SUPERVISOR */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Supervisor Team"
            icon={<Users size={20} />}
          />

          <div className="p-4">

            <table className="w-full border-collapse">

              <tbody>

                {supervisors.map(([rank, name], index) => (

                  <tr
                    key={index}
                    className="border border-[#c5ccd4]"
                  >

                    <td className="bg-[#e7ebef] px-4 py-3 w-[35%]">

                      <p className="text-[#8b6b18] uppercase tracking-[1px] text-[12px] font-bold">
                        {rank}
                      </p>

                    </td>

                    <td className="bg-white px-4 py-3">

                      <h3 className="text-[20px] font-bold text-[#022b5b]">
                        {name}
                      </h3>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* OPERATIONAL */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Operational Team"
            icon={<BriefcaseBusiness size={20} />}
          />

          <div className="p-4">

            <table className="w-full border-collapse">

              <tbody>

                {operational.map(([rank, name, division], index) => (

                  <tr
                    key={index}
                    className="border border-[#c5ccd4]"
                  >

                    <td className="bg-[#e7ebef] px-4 py-3 w-[25%]">

                      <p className="text-[#8b6b18] uppercase tracking-[1px] text-[12px] font-bold">
                        {rank}
                      </p>

                    </td>

                    <td className="bg-white px-4 py-3 w-[35%]">

                      <h3 className="text-[19px] font-bold text-[#022b5b]">
                        {name}
                      </h3>

                    </td>

                    <td className="bg-[#f8fafc] px-4 py-3">

                      <p className="text-[14px] text-gray-600">
                        {division}
                      </p>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* DIVISIONS */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <SectionHeader
            title="Official Divisions"
            icon={<Users size={20} />}
          />

          <div className="p-4 grid grid-cols-3 gap-3">

            {divisions.map((division, index) => (

              <div
                key={index}
                className="border border-[#c5ccd4] bg-white px-4 py-4"
              >

                <h3 className="text-[18px] font-bold text-[#022b5b]">
                  {division}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}