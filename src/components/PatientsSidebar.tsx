import { Search, MoreHorizontal } from "lucide-react";
import type { Patient } from "@/types/patient";

interface Props {
  patients: Patient[];
  selectedName: string;
  onSelectPatient: (name: string) => void;
}

export default function PatientsSidebar({ patients, selectedName, onSelectPatient }: Props) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h2 className="text-2xl font-extrabold text-foreground">Patients</h2>
        <Search size={18} className="text-foreground" />
      </div>
      <div className="overflow-y-auto flex-1 custom-scrollbar">
        {patients.map((patient) => {
          const isActive = patient.name === selectedName;
          return (
            <div
              key={patient.name}
              onClick={() => onSelectPatient(patient.name)}
              className={`flex items-center gap-3 px-5 py-4 cursor-pointer select-none ${
                isActive ? "bg-sidebar-accent" : "hover:bg-muted"
              }`}
            >
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground truncate">
                  {patient.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <button className="text-foreground shrink-0">
                <MoreHorizontal size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
