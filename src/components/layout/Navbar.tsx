export default function Navbar() {
  return (
    <header className="w-full border-b border-yellow-500 bg-[#0b2d5c] text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 border border-yellow-500 flex items-center justify-center text-yellow-400 font-bold">
            S
          </div>

          <div>

            <h1 className="text-2xl font-bold leading-none">
              SANews
            </h1>

            <p className="text-xs text-yellow-400 tracking-[3px]">
              OFFICIAL MEDIA NETWORK
            </p>

          </div>

        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">

          <a href="/" className="hover:text-yellow-400">
            HOME
          </a>

          <a href="/about" className="hover:text-yellow-400">
            ABOUT
          </a>

          <a href="/structure" className="hover:text-yellow-400">
            STRUCTURE
          </a>

          <a href="/rules" className="hover:text-yellow-400">
            RULES
          </a>

          <a href="/services" className="hover:text-yellow-400">
            SERVICES
          </a>

          <a href="/recruitment" className="hover:text-yellow-400">
            RECRUITMENT
          </a>

        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">

          <button className="border border-yellow-500 px-3 py-1 text-sm text-yellow-400">
            MENU
          </button>

        </div>

      </div>

    </header>
  );
}
