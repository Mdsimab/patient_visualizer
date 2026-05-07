import { Download } from "lucide-react";

interface Props {
  results: string[];
}

export default function LabResults({ results }: Props) {
  return (
    <div className="bg-card rounded-2xl p-5">
      <h2 className="text-2xl font-extrabold text-foreground mb-4">Lab Results</h2>
      <div className="space-y-0">
        {results.map((result, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b border-border last:border-0"
          >
            <span className="text-sm text-foreground">{result}</span>
            <button className="text-foreground">
              <Download size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
