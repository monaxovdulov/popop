import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BoostButton } from "@/components/ui/boost-button";

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isGamePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <img 
          src="/ava.png" 
          alt={t("avatar")} 
          className="w-8 h-8 rounded-full"
        />
        <span className="text-lg font-medium">Roger32</span>
      </div>
      {isGamePage ? (
        <BoostButton />
      ) : (
        <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium">
          {t("boost")}
        </button>
      )}
    </header>
  );
};
