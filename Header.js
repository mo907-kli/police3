import { Bell, Code, Home, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function Header({ user, lang, t, onLogout }) {
  const getRankColor = (rank) => {
    switch (rank) {
      case "admin": return "bg-red-600";
      case "officer": return "bg-blue-600";
      case "individual": return "bg-green-600";
      default: return "bg-slate-600";
    }
  };

  const getRankLabel = (rank) => {
    return t[rank] || rank;
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-4 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 px-2 py-1 bg-slate-800 rounded text-xs text-white">
          <span className="font-bold">mo</span>
          <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold">A</div>
        </div>

        <div className="relative">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </div>

        <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white text-xs">
          {lang === 'ar' ? 'English' : 'English'}
        </Button>

        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white bg-red-900/50 hover:bg-red-900">
          <Code className="w-4 h-4" />
        </Button>
      </div>

      {/* Center Section */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white font-semibold text-lg tracking-wide">{t.header}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
          <Home className="w-5 h-5" />
        </Button>

        {user && (
          <div className="flex items-center gap-3 pl-3 border-l border-slate-700">
            <div className="flex flex-col items-end">
              <span className="text-white text-sm font-medium">{user.username}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded text-white ${getRankColor(user.rank)}`}>
                {getRankLabel(user.rank)}
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={onLogout} className="text-slate-400 hover:text-red-400">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}