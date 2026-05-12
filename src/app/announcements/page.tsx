export default function AnnouncementsPage() {
  const announcements = [
    {
      title: "Server Maintenance",
      date: "13 May 2026",
      description: "Website maintenance scheduled at 23:00 WIB.",
    },
    {
      title: "New Recruitment Open",
      date: "10 May 2026",
      description: "SANews is opening new staff recruitment.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Announcements</h1>

      <div className="space-y-6">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="border border-neutral-800 p-5 rounded-xl"
          >
            <p className="text-sm text-neutral-400 mb-2">{item.date}</p>

            <h2 className="text-2xl font-semibold mb-2">
              {item.title}
            </h2>

            <p className="text-neutral-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}