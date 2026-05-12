import {
  Camera,
  Image as ImageIcon,
  CalendarDays,
  FolderOpen,
} from "lucide-react";

const gallery = [
  {
    title: "City Hall Press Conference Coverage",
    category: "Press Conference",
    date: "May 13, 2026",
  },
  {
    title: "Downtown Charity Event Documentation",
    category: "Community Event",
    date: "May 12, 2026",
  },
  {
    title: "Government Public Interview Session",
    category: "Interview",
    date: "May 11, 2026",
  },
  {
    title: "Live SANews Broadcast Operations",
    category: "Broadcast",
    date: "May 10, 2026",
  },
  {
    title: "Emergency Coverage Documentation",
    category: "Field Reporting",
    date: "May 09, 2026",
  },
  {
    title: "Official Media Partnership Event",
    category: "Public Affairs",
    date: "May 08, 2026",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#dfe5e1]">

      <section className="max-w-[1700px] mx-auto px-8 py-8 space-y-8">

        {/* HEADER */}

        <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

          <div className="bg-white border border-gray-300 overflow-hidden">

            <div className="relative bg-gradient-to-r from-[#123a63] to-[#1d4d7d] text-white px-8 py-6 overflow-hidden">

              <img
                src="/images/logo.png"
                className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 w-28"
              />

              <div className="relative z-10 flex items-center gap-4">

                <Camera size={34} />

                <div>

                  <h1 className="text-4xl font-bold">
                    SANews Gallery Archive
                  </h1>

                  <p className="text-gray-300 text-sm mt-1">
                    Official Media Documentation & Coverage Archive
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ARCHIVE INFO */}

        <div className="grid grid-cols-3 gap-8">

          <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2">

            <div className="bg-white border border-gray-300 p-6">

              <div className="flex items-center gap-4">

                <ImageIcon size={30} className="text-[#123a63]" />

                <div>

                  <h2 className="text-3xl font-bold text-[#123a63]">
                    240+
                  </h2>

                  <p className="text-sm text-gray-600">
                    Archived Images
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2">

            <div className="bg-white border border-gray-300 p-6">

              <div className="flex items-center gap-4">

                <FolderOpen size={30} className="text-[#123a63]" />

                <div>

                  <h2 className="text-3xl font-bold text-[#123a63]">
                    85+
                  </h2>

                  <p className="text-sm text-gray-600">
                    Coverage Reports
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2">

            <div className="bg-white border border-gray-300 p-6">

              <div className="flex items-center gap-4">

                <CalendarDays size={30} className="text-[#123a63]" />

                <div>

                  <h2 className="text-3xl font-bold text-[#123a63]">
                    Daily
                  </h2>

                  <p className="text-sm text-gray-600">
                    Archive Updates
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* MEDIA TABLE */}

        <div className="border border-[#b8c0bb] bg-[#cfd6d1] p-2 shadow-sm">

          <div className="bg-white border border-gray-300 overflow-hidden">

            {/* TABLE HEADER */}

            <div className="bg-gradient-to-r from-[#123a63] to-[#1d4d7d] text-white px-6 py-4 flex items-center gap-3">

              <Camera size={20} />

              <span className="text-2xl font-bold">
                Media Archive List
              </span>

            </div>

            {/* TABLE */}

            <div className="p-6">

              <div className="border border-gray-300">

                {/* TOP */}

                <div className="grid grid-cols-12 bg-[#d6dde2] border-b border-gray-300 text-sm font-bold text-gray-700">

                  <div className="col-span-1 p-4">
                    ID
                  </div>

                  <div className="col-span-5 p-4 border-l border-gray-300">
                    TITLE
                  </div>

                  <div className="col-span-3 p-4 border-l border-gray-300">
                    CATEGORY
                  </div>

                  <div className="col-span-3 p-4 border-l border-gray-300">
                    DATE
                  </div>

                </div>

                {/* ROWS */}

                {gallery.map((item, index) => (

                  <div
                    key={index}
                    className="grid grid-cols-12 border-b border-gray-300 hover:bg-[#eef1f3] transition text-sm"
                  >

                    <div className="col-span-1 p-4 font-bold text-[#123a63]">
                      #{index + 1}
                    </div>

                    <div className="col-span-5 p-4 border-l border-gray-300 font-semibold text-gray-800">
                      {item.title}
                    </div>

                    <div className="col-span-3 p-4 border-l border-gray-300">

                      <span className="bg-[#123a63] text-white text-xs px-3 py-1 font-bold">

                        {item.category}

                      </span>

                    </div>

                    <div className="col-span-3 p-4 border-l border-gray-300 text-gray-600">
                      {item.date}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}