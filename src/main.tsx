import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@/providers/shadcn-provider";
import { QueryProvider } from "@/providers/query-provider";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { APP_URL } from "./config";
import { Router } from "./router";
import i18n from "@/lib/i18n";
import "@/lib/tma";
import "./index.css";

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="system" storageKey="shadcn-ui-theme">
        <QueryProvider>
          <TonConnectUIProvider
            manifestUrl={`${APP_URL}/tonconnect-manifest.json`}
          >
            <Router />
          </TonConnectUIProvider>
        </QueryProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
