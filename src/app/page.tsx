import {
  Shield,
  Users,
  Newspaper,
  Radio,
  Globe,
  Megaphone,
  Activity,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#dfe5e1]">

      {/* HERO */}

      <section className="max-w-[1700px] mx-auto px-8 pt-8">

        <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

          <div
            className="relative h-[360px] overflow-hidden border border-gray-400"
            style={{
              backgroundImage: "url('/images/banner.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

            {/* GOLD LINE */}

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#d8a93a]" />

            {/* WATERMARK */}

            <img
              src="/images/logo.png"
              className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 w-72"
            />

            {/* CONTENT */}

            <div className="relative z-10 h-full flex flex-col justify-center px-12">

              <div className="flex items-center gap-5 mb-5">

                <img
                  src="/images/logo.png"
                  className="w-24 h-24 object-contain"
                />

                <div>

                  <h1 className="text-5xl font-bold text-white">
                    SANews Portal
                  </h1>

                  <p className="text-gray-300 text-lg mt-2">
                    Official Journalism Faction
                  </p>

                </div>

              </div>

              <p className="text-xl text-gray-200 max-w-4xl leading-relaxed">
                Delivering broadcasts, professional journalism,
                media coverage, event publication, and newsroom
                roleplay experience inside Novelty Roleplay.
              </p>

              {/* STATS */}

              <div className="flex gap-12 mt-10">

                <div>

                  <p className="text-4xl font-bold text-white">
                    18
                  </p>

                  <span className="text-sm text-gray-300">
                    Members
                  </span>

                </div>

                <div>

                  <p className="text-4xl font-bold text-white">
                    3
                  </p>

                  <span className="text-sm text-gray-300">
                    Divisions
                  </span>

                </div>

                <div>

                  <p className="text-4xl font-bold text-white">
                    2026
                  </p>

                  <span className="text-sm text-gray-300">
                    Founded
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BROADCAST */}

      <section className="max-w-[1700px] mx-auto px-8 py-8">

        <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

          <div className="bg-white border border-gray-300 overflow-hidden">

            <div className="relative bg-gradient-to-r from-[#123a63] to-[#1d4d7d] text-white px-6 py-4 text-2xl font-bold overflow-hidden">

              <img
                src="/images/logo.png"
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-10 w-24"
              />

              <div className="relative z-10 flex items-center gap-3">

                <Radio size={22} />

                <span>Latest Broadcast</span>

              </div>

            </div>

            <div className="p-5 space-y-4">

              <div className="bg-[#eef1f3] border-l-4 border-[#d8a93a] border border-gray-300 p-4 hover:bg-gray-100 transition">

                <div className="flex items-center gap-3 mb-2">

                  <Activity size={18} />

                  <span className="font-semibold text-sm text-gray-600">
                    ACTIVE ANNOUNCEMENT
                  </span>

                </div>

                <p className="text-gray-700 text-sm">
                  SANews recruitment batch is officially open for public applicants.
                </p>

              </div>

              <div className="bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-4 hover:bg-gray-100 transition">

                <div className="flex items-center gap-3 mb-2">

                  <Megaphone size={18} />

                  <span className="font-semibold text-sm text-gray-600">
                    PUBLIC SERVICE
                  </span>

                </div>

                <p className="text-gray-700 text-sm">
                  SANews now provides live event coverage and public broadcast services.
                </p>

              </div>

              <div className="bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-4 hover:bg-gray-100 transition">

                <div className="flex items-center gap-3 mb-2">

                  <Users size={18} />

                  <span className="font-semibold text-sm text-gray-600">
                    INTERNAL UPDATE
                  </span>

                </div>

                <p className="text-gray-700 text-sm">
                  Weekly internal evaluation meeting will be held this Saturday.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="max-w-[1700px] mx-auto px-8 pb-16 grid grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="col-span-2 space-y-8">

          {/* ANNOUNCEMENT */}

          <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

            <div className="bg-white border border-gray-300 overflow-hidden">

              <div className="relative bg-gradient-to-r from-[#123a63] to-[#1d4d7d] text-white px-6 py-4 text-xl font-bold overflow-hidden">

                <img
                  src="/images/logo.png"
                  className="absolute right-5 top-1/2 -translate-y-1/2 opacity-10 w-24"
                />

                <div className="relative z-10">
                  ANNOUNCEMENTS
                </div>

              </div>

              <div className="p-5 space-y-4">

                <div className="bg-[#eef1f3] border-l-4 border-[#d8a93a] border border-gray-300 p-5 hover:bg-gray-100 transition">

                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-3">

                      <Megaphone size={20} />

                      <h3 className="font-bold text-lg">
                        Recruitment Active
                      </h3>

                    </div>

                    <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-sm">
                      ACTIVE
                    </span>

                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    Recruitment period for SANews May 2026 batch is currently active.
                  </p>

                </div>

                <div className="bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-5 hover:bg-gray-100 transition">

                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-3">

                      <Users size={20} />

                      <h3 className="font-bold text-lg">
                        Weekly Evaluation
                      </h3>

                    </div>

                    <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded-sm">
                      INTERNAL
                    </span>

                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    All SANews members are required to attend internal evaluation meetings.
                  </p>

                </div>

                <div className="bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-5 hover:bg-gray-100 transition">

                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-3">

                      <Radio size={20} />

                      <h3 className="font-bold text-lg">
                        Broadcast Service
                      </h3>

                    </div>

                    <span className="bg-[#123a63] text-white text-xs px-2 py-1 rounded-sm">
                      SERVICE
                    </span>

                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    Broadcasting services are available for public events and campaigns.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-8">

          {/* QUICK ACCESS */}

          <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

            <div className="bg-white border border-gray-300 overflow-hidden">

              <div className="bg-gradient-to-r from-[#123a63] to-[#1d4d7d] text-white px-6 py-4 text-xl font-bold">
                Quick Access
              </div>

              <div className="p-5 space-y-4">

                <a
                  href="/rules"
                  className="flex items-center gap-3 bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-4 hover:bg-gray-100 transition"
                >

                  <Shield size={20} />

                  <span className="font-medium">
                    Rules
                  </span>

                </a>

                <a
                  href="/recruitment"
                  className="flex items-center gap-3 bg-[#eef1f3] border-l-4 border-[#d8a93a] border border-gray-300 p-4 hover:bg-gray-100 transition"
                >

                  <Users size={20} />

                  <span className="font-medium">
                    Recruitment
                  </span>

                </a>

                <a
                  href="/structure"
                  className="flex items-center gap-3 bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-4 hover:bg-gray-100 transition"
                >

                  <Newspaper size={20} />

                  <span className="font-medium">
                    Structure
                  </span>

                </a>

              </div>

            </div>

          </div>

          {/* OFFICIAL LINKS */}

          <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

            <div className="bg-white border border-gray-300 overflow-hidden">

              <div className="bg-gradient-to-r from-[#123a63] to-[#1d4d7d] text-white px-6 py-4 text-xl font-bold">
                Official Links
              </div>

              <div className="p-5 space-y-4">

                <a
                  href="https://discord.gg/sanews"
                  target="_blank"
                  className="block bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-4 hover:bg-gray-100 transition"
                >

                  <div className="flex items-center gap-3 mb-2">

                    <Globe size={18} />

                    <h3 className="font-bold text-sm">
                      SANews Official Discord
                    </h3>

                  </div>

                  <p className="text-gray-700 text-sm">
                    https://bit.ly/sanewsnvrp
                  </p>

                </a>

                <a
                  href="https://discord.gg/novelty"
                  target="_blank"
                  className="block bg-[#eef1f3] border-l-4 border-[#d8a93a] border border-gray-300 p-4 hover:bg-gray-100 transition"
                >

                  <div className="flex items-center gap-3 mb-2">

                    <Globe size={18} />

                    <h3 className="font-bold text-sm">
                      Novelty Official Discord
                    </h3>

                  </div>

                  <p className="text-gray-700 text-sm">
                    https://bit.ly/noveltyrp
                  </p>

                </a>

                <div className="bg-[#eef1f3] border-l-4 border-[#123a63] border border-gray-300 p-4 hover:bg-gray-100 transition">

                  <div className="flex items-center gap-3 mb-2">

                    <Radio size={18} />

                    <h3 className="font-bold text-sm">
                      Novelty IP Address
                    </h3>

                  </div>

                  <p className="text-gray-700 text-sm">
                    104.234.180.208:7001
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}