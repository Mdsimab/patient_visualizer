import { Calendar, Users, Phone, ShieldCheck } from "lucide-react";
import type { Patient } from "@/types/patient";

interface Props {
  patient: Patient;
}

export default function PatientProfile({ patient }: Props) {
  const dob = new Date(patient.date_of_birth);
  const formattedDob = dob.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const infoItems = [
    { icon: Calendar, label: "Date Of Birth", value: formattedDob },
    { icon: Users, label: "Gender", value: patient.gender },
    { icon: Phone, label: "Contact Info.", value: patient.phone_number },
    { icon: Phone, label: "Emergency Contacts", value: patient.emergency_contact },
    { icon: ShieldCheck, label: "Insurance Provider", value: patient.insurance_type },
  ];

  return (
    <div className="bg-card rounded-2xl p-5 flex flex-col items-center">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="w-[200px] h-[200px] rounded-full object-cover mb-4"
      />
      <h2 className="text-2xl font-extrabold text-foreground mb-6">{patient.name}</h2>

      <div className="w-full space-y-5">
        {infoItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center shrink-0">
              <item.icon size={18} className="text-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-sm font-bold text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-accent text-accent-foreground font-bold text-sm py-3 px-10 rounded-full hover:opacity-90 transition-opacity">
        Show All Information
      </button>
    </div>
  );
}
