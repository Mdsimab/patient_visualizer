import type { DiagnosticItem } from "@/types/patient";

interface Props {
  items: DiagnosticItem[];
}

export default function DiagnosticList({ items }: Props) {
  return (
    <div className="bg-card rounded-2xl p-5">
      <h2 className="text-2xl font-extrabold text-foreground mb-4">Diagnostic List</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-muted rounded-t-2xl">
              <th className="px-4 py-3 text-sm font-bold text-foreground rounded-tl-full rounded-bl-full">
                Problem/Diagnosis
              </th>
              <th className="px-4 py-3 text-sm font-bold text-foreground">Description</th>
              <th className="px-4 py-3 text-sm font-bold text-foreground rounded-tr-full rounded-br-full">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="px-4 py-3 text-sm text-foreground">{item.name}</td>
                <td className="px-4 py-3 text-sm text-foreground">{item.description}</td>
                <td className="px-4 py-3 text-sm text-foreground">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
