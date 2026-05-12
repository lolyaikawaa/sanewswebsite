import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
}

export default function SectionHeader({
  title,
  icon,
}: Props) {

  return (
    <div className="border-b border-[#7d8896]">

      <div className="bg-gradient-to-r from-[#022b5b] to-[#214d7f] px-5 py-4 flex items-center gap-3">

        <div className="text-[#d6a437]">
          {icon}
        </div>

        <h2 className="text-[28px] font-bold tracking-tight text-white">
          {title}
        </h2>

      </div>

    </div>
  );
}