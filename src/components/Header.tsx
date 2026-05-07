import { Home, Users, CalendarDays, MessageSquare, CreditCard, Settings, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Overview" },
  { icon: Users, label: "Patients", active: true },
  { icon: CalendarDays, label: "Schedule" },
  { icon: MessageSquare, label: "Message" },
  { icon: CreditCard, label: "Transactions" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-card rounded-[70px] px-4 md:px-8 py-3 mx-4 md:mx-[18px] mt-4 md:mt-[18px] flex items-center justify-between relative">
    {/* Logo */}
<div className="flex items-center gap-2">
  <div className="bg-[#01F0D0] p-2 rounded-lg">
    <span className="font-bold text-white text-xl">P</span>
  </div>
  <span className="text-xl font-bold text-foreground hidden lg:block">
    PatientVisualizer
  </span>
</div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Nav */}
      <nav className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-1 absolute md:static top-full left-0 right-0 bg-card md:bg-transparent rounded-2xl md:rounded-none p-4 md:p-0 mt-2 md:mt-0 z-50 shadow-lg md:shadow-none`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-bold transition-colors w-full md:w-auto ${
              item.active
                ? "bg-accent text-accent-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Doctor Profile */}
      <div className="hidden md:flex items-center gap-3">
        <img
          src="/doctor-avatar.png"
          alt="Dr. Jose Simmons"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-sm font-bold text-foreground">Dr. Jose Simmons</p>
          <p className="text-xs text-muted-foreground">General Practitioner</p>
        </div>
        <div className="w-px h-11 bg-border mx-2" />
        <button className="text-foreground">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
