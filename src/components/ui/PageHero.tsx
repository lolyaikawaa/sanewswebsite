import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHero({
  title,
  subtitle,
}: Props) {

  return (
    <div className="border border-[#9ea7b3] bg-[#d8dde3] p-[3px]">

      <div className="relative overflow-hidden border border-[#4b5663]">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#02152d]/80" />

        {/* TOP DARK */}
        <div className="absolute top-0 left-0 w-full h-[36px] bg-black/20" />

        {/* GOLD LINE */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#d6a437]" />

        {/* WATERMARK */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.08]">

          <Image
            src="/images/logo.png"
            alt="SANews"
            width={240}
            height={240}
          />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-10 py-10">

          <div className="flex items-center gap-5">

            <div className="border border-[#d6a437] bg-black/20 p-3">

              <Image
                src="/images/logo.png"
                alt="SANews"
                width={52}
                height={52}
              />

            </div>

            <div>

              <h1 className="text-[48px] font-extrabold tracking-tight text-white leading-none">
                {title}
              </h1>

              <p className="mt-2 text-[#d6a437] uppercase tracking-[3px] text-sm font-bold">
                SANews Official Journalism Network
              </p>

            </div>

          </div>

          <div className="mt-7 max-w-[950px] border-l-4 border-[#d6a437] pl-5">

            <p className="text-[19px] leading-relaxed text-gray-200">
              {subtitle}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}