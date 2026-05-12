export default function AdminDashboardPage() {

  const recentActivities = [
    "Newsroom publication system initialized.",
    "Broadcast operations currently active.",
    "Recruitment applications updated.",
    "Podcast scheduling database synchronized.",
  ];

  const quickStats = [
    {
      title: "Published Articles",
      value: "18",
    },

    {
      title: "Broadcast Requests",
      value: "4",
    },

    {
      title: "Active Operations",
      value: "3",
    },

    {
      title: "Pending Reviews",
      value: "2",
    },
  ];

  return (
    <div className="min-h-screen bg-[#d9dee3]">

      {/* TOP HEADER */}

      <div className="border-b-4 border-[#c79a2b] bg-[#06264d]">

        <div className="max-w-[1750px] mx-auto px-5">

          <div className="h-[82px] flex items-center justify-between">

            <div>

              <h1 className="text-[34px] font-black text-white leading-none">
                SANews Administration Panel
              </h1>

              <p className="text-[#d6a437] text-[12px] uppercase tracking-[2px] font-bold mt-2">
                Official Newsroom Operational System
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="border border-[#406287] bg-[#0c3768] px-5 py-3">

                <p className="text-[11px] uppercase tracking-[1px] text-[#d6a437] font-bold">
                  System Status
                </p>

                <p className="text-[15px] text-white font-semibold mt-1">
                  ONLINE
                </p>

              </div>

              <div className="border border-[#5f7d4d] bg-[#dbe8ca] px-5 py-3">

                <p className="text-[11px] uppercase tracking-[1px] text-[#4d6b1f] font-bold">
                  Broadcast Status
                </p>

                <p className="text-[15px] text-[#35521a] font-semibold mt-1">
                  ACTIVE
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="max-w-[1750px] mx-auto p-4">

        <div className="grid grid-cols-[320px_1fr] gap-4">

          {/* SIDEBAR */}

          <div className="space-y-4">

            {/* NAVIGATION */}

            <div className="border border-[#aeb6c0] bg-[#eef1f4]">

              <div className="bg-[#d7dde4] border-b border-[#b8c0ca] px-4 py-3">

                <h2 className="text-[19px] font-bold text-[#022b5b]">
                  Administrative Navigation
                </h2>

              </div>

              <div className="p-3 space-y-2">

                <a
                  href="/admin/create-article"
                  className="block border border-[#c5ccd4] bg-white px-4 py-3 hover:bg-[#f6f9fc]"
                >
                  Create Article
                </a>

                <a
                  href="/admin/articles"
                  className="block border border-[#c5ccd4] bg-white px-4 py-3 hover:bg-[#f6f9fc]"
                >
                  Article Management
                </a>

                <div className="border border-[#c5ccd4] bg-white px-4 py-3">
                  Broadcast Operations
                </div>

                <div className="border border-[#c5ccd4] bg-white px-4 py-3">
                  Recruitment Control
                </div>

                <div className="border border-[#c5ccd4] bg-white px-4 py-3">
                  Service Requests
                </div>

              </div>

            </div>

            {/* INFORMATION */}

            <div className="border border-[#aeb6c0] bg-[#eef1f4]">

              <div className="bg-[#d7dde4] border-b border-[#b8c0ca] px-4 py-3">

                <h2 className="text-[19px] font-bold text-[#022b5b]">
                  Operational Information
                </h2>

              </div>

              <div className="p-4 space-y-4">

                <div>

                  <p className="text-[11px] uppercase tracking-[1px] text-[#8b6b18] font-bold">
                    Current Division
                  </p>

                  <p className="text-[15px] text-[#022b5b] font-semibold mt-1">
                    SANews Administration
                  </p>

                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[1px] text-[#8b6b18] font-bold">
                    Current Operation
                  </p>

                  <p className="text-[15px] text-[#022b5b] font-semibold mt-1">
                    Newsroom Management
                  </p>

                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[1px] text-[#8b6b18] font-bold">
                    Active Service
                  </p>

                  <p className="text-[15px] text-[#1f6b2d] font-semibold mt-1">
                    Broadcast Coverage
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div className="space-y-4">

            {/* ALERT */}

            <div className="border border-[#8d2d2d] bg-[#f4dcdc]">

              <div className="bg-[#8b1d1d] border-b border-[#661313] px-4 py-3">

                <h2 className="text-[18px] uppercase tracking-[1px] font-bold text-white">
                  Internal Administrative Notice
                </h2>

              </div>

              <div className="bg-white px-4 py-4">

                <p className="text-[15px] text-gray-700 leading-relaxed">
                  All SANews personnel are required to maintain publication quality standards and ensure that all newsroom operations follow official SANews regulations and organizational procedures.
                </p>

              </div>

            </div>

            {/* QUICK STATS */}

            <div className="grid grid-cols-4 gap-4">

              {quickStats.map((stat, index) => (

                <div
                  key={index}
                  className="border border-[#aeb6c0] bg-[#eef1f4]"
                >

                  <div className="bg-[#d7dde4] border-b border-[#b8c0ca] px-4 py-2">

                    <p className="text-[11px] uppercase tracking-[1px] text-[#8b6b18] font-bold">
                      {stat.title}
                    </p>

                  </div>

                  <div className="bg-white px-4 py-5">

                    <p className="text-[34px] font-black text-[#022b5b]">
                      {stat.value}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* ACTIVITY */}

            <div className="border border-[#aeb6c0] bg-[#eef1f4]">

              <div className="bg-[#d7dde4] border-b border-[#b8c0ca] px-4 py-3 flex items-center justify-between">

                <h2 className="text-[19px] font-bold text-[#022b5b]">
                  Administrative Activity Log
                </h2>

                <a
                  href="/admin/create-article"
                  className="border border-[#8f6c16] bg-gradient-to-b from-[#e0b54c] to-[#c99722] px-4 py-2 text-[12px] font-bold"
                >
                  NEW ARTICLE
                </a>

              </div>

              <div className="p-4">

                <table className="w-full border-collapse">

                  <tbody>

                    {recentActivities.map((activity, index) => (

                      <tr
                        key={index}
                        className="border border-[#c5ccd4]"
                      >

                        <td className="bg-[#e8edf2] px-4 py-3 w-[160px] font-semibold text-[#022b5b]">
                          SYSTEM
                        </td>

                        <td className="bg-white px-4 py-3 text-gray-700">
                          {activity}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}