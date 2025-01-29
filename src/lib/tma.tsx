import { useClientOnce } from "@/hooks/use-client-once";
import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
  requestWriteAccess,
  swipeBehavior,
} from "@telegram-apps/sdk-react";

export function telegramInit(debug: boolean): void {
  $debug.set(debug);

  initSDK();

  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();

  miniApp.setBackgroundColor("#0A0A19");
  miniApp.setHeaderColor("#0A0A19");

  if (requestWriteAccess.isAvailable()) {
    requestWriteAccess();
  }

  if (miniApp.setBottomBarColor.isSupported()) {
    miniApp.setBottomBarColor("#0A0A19");
  }

  if (swipeBehavior.mount.isAvailable()) {
    swipeBehavior.mount();
  }

  if (swipeBehavior.isMounted() && swipeBehavior.disableVertical.isAvailable()) {
    swipeBehavior.disableVertical();
  }

  void viewport
    .mount()
    .then(async () => {
      viewport.bindCssVars();

      if (viewport.expand.isAvailable()) {
        viewport.expand();
      }

      if (viewport.requestFullscreen.isSupported()) {
        await viewport.requestFullscreen();
      }
    })
    .catch((e) => {
      console.error("Something went wrong mounting the viewport", e);
    });
}

useClientOnce(() => {
  telegramInit(false);
});