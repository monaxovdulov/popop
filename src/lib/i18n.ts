import { initData } from "@telegram-apps/sdk-react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export function initI18n() {
  const userLanguage = initData?.user()?.languageCode || "en";

  try {
    i18n.use(initReactI18next).init({
      lng: userLanguage,
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      ns: ["translation"],
      fallbackLng: "en",
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (error) {
    console.error("Error initializing i18next:", error);
  }
}

initI18n();

export default i18n;
