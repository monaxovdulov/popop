import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="container max-w-lg pt-[var(--tg-viewport-content-safe-area-inset-top)]">
      <header className="pt-1 pb-4 flex items-center justify-between relative">
        {t("header")}
      </header>
    </div>
  );
};
