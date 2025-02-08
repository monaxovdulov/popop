import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/ava.png" 
            alt={t("avatar")} 
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg font-medium">Roger32</span>
        </div>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium">
          {t("boost")}
        </button>
      </div>
    </header>
  );
};
