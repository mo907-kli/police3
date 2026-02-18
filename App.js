import { useState } from "react";
import { Header } from "./components/Header";
import { ButtonGrid } from "./components/ButtonGrid";
import { StarfieldBackground } from "./components/StarfieldBackground";
import { Login } from "./components/Login";
import { translations } from "./utils/translations";

export default function App() {
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState('ar');

  const handleLogin = (username, rank) => {
    setUser({ username, rank });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const t = translations[lang];

  if (!user) {
    return (
      <>
        <StarfieldBackground />
        <Login onLogin={handleLogin} lang={lang} t={t} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <StarfieldBackground />
      <Header user={user} lang={lang} t={t} onLogout={handleLogout} />
      <ButtonGrid t={t} />
    </div>
  );
}