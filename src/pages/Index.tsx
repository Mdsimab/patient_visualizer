import Header from "@/components/Header";
import PatientsSidebar from "@/components/PatientsSidebar";
import BloodPressureChart from "@/components/BloodPressureChart";
import VitalCard from "@/components/VitalCard";
import DiagnosticList from "@/components/DiagnosticList";
import LabResults from "@/components/LabResults";
import PatientProfile from "@/components/PatientProfile";
import { usePatientData } from "@/hooks/usePatientData";
import { Skeleton } from "@/components/ui/skeleton";

export default function Index() {
  const { allPatients, selectedPatient, selectedName, setSelectedName, isLoading, error } = usePatientData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-[18px]">
        <Skeleton className="h-[72px] rounded-[70px] mb-[18px]" />
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[18px]">
          <Skeleton className="w-full lg:w-[280px] h-[300px] lg:h-[600px] rounded-2xl" />
          <Skeleton className="flex-1 h-[400px] lg:h-[600px] rounded-2xl" />
          <Skeleton className="w-full lg:w-[320px] h-[400px] lg:h-[600px] rounded-2xl" />
        </div>
      </div>
    );
  }

  if (error || !selectedPatient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive text-lg font-bold">Failed to load patient data.</p>
      </div>
    );
  }

  const latest = selectedPatient.diagnosis_history[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[18px] p-4 lg:p-[18px] pt-4 lg:pt-[18px]">
        {/* Left Sidebar - Patients */}
        <aside className="w-full lg:w-[280px] shrink-0">
          <PatientsSidebar
            patients={allPatients}
            selectedName={selectedName}
            onSelectPatient={setSelectedName}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-4 lg:space-y-[18px] min-w-0">
          {/* Diagnosis History */}
          <section className="bg-card rounded-2xl p-4 lg:p-5">
            <h2 className="text-xl lg:text-2xl font-extrabold text-foreground mb-4">
              Diagnosis History
            </h2>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base lg:text-lg font-bold text-foreground">Blood Pressure</h3>
                <span className="text-sm text-muted-foreground">Last 6 months</span>
              </div>
              <BloodPressureChart history={selectedPatient.diagnosis_history} />
            </div>

            {/* Vital Signs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <VitalCard
                icon="/respiratory-rate.svg"
                label="Respiratory Rate"
                value={`${latest.respiratory_rate.value} bpm`}
                level={latest.respiratory_rate.levels}
                bgColor="bg-[hsl(218,65%,95%)]"
              />
              <VitalCard
                icon="/temperature.svg"
                label="Temperature"
                value={`${latest.temperature.value}°F`}
                level={latest.temperature.levels}
                bgColor="bg-[hsl(0,82%,95%)]"
              />
              <VitalCard
                icon="/heart-rate.svg"
                label="Heart Rate"
                value={`${latest.heart_rate.value} bpm`}
                level={latest.heart_rate.levels}
                bgColor="bg-[hsl(340,82%,95%)]"
              />
            </div>
          </section>

          {/* Diagnostic List */}
          <DiagnosticList items={selectedPatient.diagnostic_list} />
        </main>

        {/* Right Sidebar - Patient Profile + Lab Results */}
        <aside className="w-full lg:w-[320px] shrink-0 space-y-4 lg:space-y-[18px]">
          <PatientProfile patient={selectedPatient} />
          <LabResults results={selectedPatient.lab_results} />
        </aside>
      </div>
    </div>
  );
}
