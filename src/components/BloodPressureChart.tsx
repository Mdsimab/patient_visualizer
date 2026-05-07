import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ArrowUp, ArrowDown } from "lucide-react";
import type { DiagnosisHistoryEntry } from "@/types/patient";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

interface Props {
  history: DiagnosisHistoryEntry[];
}

export default function BloodPressureChart({ history }: Props) {
  const recentHistory = history.slice(0, 6).reverse();
  const latest = history[0];

  const labels = recentHistory.map(
    (entry) => `${entry.month.slice(0, 3)}, ${entry.year}`
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: recentHistory.map((e) => e.blood_pressure.systolic.value),
        borderColor: "hsl(349, 100%, 63%)",
        backgroundColor: "hsl(349, 100%, 63%)",
        pointBackgroundColor: "hsl(349, 100%, 63%)",
        pointBorderColor: "hsl(0, 0%, 100%)",
        pointBorderWidth: 2,
        pointRadius: 6,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: "Diastolic",
        data: recentHistory.map((e) => e.blood_pressure.diastolic.value),
        borderColor: "hsl(255, 76%, 67%)",
        backgroundColor: "hsl(255, 76%, 67%)",
        pointBackgroundColor: "hsl(255, 76%, 67%)",
        pointBorderColor: "hsl(0, 0%, 100%)",
        pointBorderWidth: 2,
        pointRadius: 6,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "hsl(199, 15%, 40%)",
          font: { size: 12 },
        },
        grid: { color: "hsl(220, 13%, 91%)" },
        border: { display: false },
      },
      x: {
        ticks: {
          color: "hsl(199, 15%, 40%)",
          font: { size: 12 },
        },
        grid: { display: false },
        border: { display: false },
      },
    },
  } as const;

  return (
    <div className="bg-[hsl(218,36%,96%)] rounded-xl p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-1 h-[200px] md:h-[220px]">
        <Line data={data} options={options} />
      </div>
      <div className="w-full md:w-[180px] shrink-0 flex md:flex-col gap-4 md:gap-4">
        {/* Systolic */}
        <div className="flex-1 md:flex-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 rounded-full bg-[hsl(349,100%,63%)]" />
            <span className="text-sm font-semibold text-foreground">Systolic</span>
          </div>
          <p className="text-xl md:text-[22px] font-extrabold text-foreground">
            {latest?.blood_pressure.systolic.value}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <ArrowUp size={10} className="text-foreground" />
            <span className="text-xs text-foreground">
              {latest?.blood_pressure.systolic.levels}
            </span>
          </div>
        </div>
        <div className="hidden md:block w-full h-px bg-border" />
        {/* Diastolic */}
        <div className="flex-1 md:flex-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 rounded-full bg-[hsl(255,76%,67%)]" />
            <span className="text-sm font-semibold text-foreground">Diastolic</span>
          </div>
          <p className="text-xl md:text-[22px] font-extrabold text-foreground">
            {latest?.blood_pressure.diastolic.value}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <ArrowDown size={10} className="text-foreground" />
            <span className="text-xs text-foreground">
              {latest?.blood_pressure.diastolic.levels}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
