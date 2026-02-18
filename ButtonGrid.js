import { FileText, Car, AlertTriangle, Map, Archive, ClipboardList, Users, Radio, BarChart3, Settings, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

const buttons = [
  { id: 1, icon: FileText, labelKey: "incidentLog" },
  { id: 2, icon: Car, labelKey: "vehicleDB" },
  { id: 3, icon: AlertTriangle, labelKey: "wantedList" },
  { id: 4, icon: Map, labelKey: "patrolMap" },
  { id: 5, icon: Archive, labelKey: "evidence" },
  { id: 6, icon: ClipboardList, labelKey: "reports" },
  { id: 7, icon: Users, labelKey: "personnel" },
  { id: 8, icon: Radio, labelKey: "communications" },
  { id: 9, icon: BarChart3, labelKey: "analytics" },
  { id: 10, icon: Settings, labelKey: "settings" },
  { id: 11, icon: HelpCircle, labelKey: "help" },
];

export function ButtonGrid({ t }) {
  return (
    <div className="pt-20 px-6 pb-6">
      <div className="grid grid-cols-3 gap-4 mb-4">
        {buttons.slice(0, 9).map((btn) => {
          const Icon = btn.icon;
          return (
            <Button
              key={btn.id}
              variant="outline"
              className="h-16 bg-slate-800 border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 flex flex-col items-center justify-center gap-1"
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{t[btn.labelKey]}</span>
            </Button>
          );
        })}
      </div>

      <div className="flex gap-4">
        {buttons.slice(9).map((btn) => {
          const Icon = btn.icon;
          return (
            <Button
              key={btn.id}
              variant="outline"
              className="h-16 bg-slate-800 border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 flex flex-col items-center justify-center gap-1"
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{t[btn.labelKey]}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}