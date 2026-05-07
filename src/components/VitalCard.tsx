import { ArrowUp, ArrowDown } from "lucide-react";

interface Props {
  icon: string;
  label: string;
  value: string;
  level: string;
  bgColor: string;
}

export default function VitalCard({ icon, label, value, level, bgColor }: Props) {
  const isLower = level.toLowerCase().includes("lower");
  const isHigher = level.toLowerCase().includes("higher");

  return (
    <div className={`${bgColor} rounded-xl p-4 flex-1`}>
      <img src={icon} alt={label} className="w-24 h-24 mb-3 mx-auto" />
      <p className="text-base text-foreground font-medium">{label}</p>
      <p className="text-[30px] font-extrabold text-foreground mt-1">{value}</p>
      <div className="flex items-center gap-1 mt-2">
        {isHigher && <ArrowUp size={10} className="text-foreground" />}
        {isLower && <ArrowDown size={10} className="text-foreground" />}
        <span className="text-sm text-foreground">{level}</span>
      </div>
    </div>
  );
}
