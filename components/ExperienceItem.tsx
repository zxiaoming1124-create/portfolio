interface ExperienceItemProps {
  period: string;
  role: string;
  org: string;
  isLast?: boolean;
}

export default function ExperienceItem({
  period,
  role,
  org,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <div className={`flex gap-5 ${!isLast ? "pb-6" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/20 mt-1.5 flex-shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-black/[0.06] mt-1.5" />}
      </div>
      <div className="pb-0">
        <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-0.5">
          {period}
        </p>
        <p className="text-[14px] font-medium text-[#0a0a0a]">{role}</p>
        <p className="text-[13px] text-[#0a0a0a]/50">{org}</p>
      </div>
    </div>
  );
}
