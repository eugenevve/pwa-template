import { FC } from "react";
import { IInstallPwaButton } from "./InstallPwaButton.types";
import styles from "./InstallPwaButton.module.css";
import { pwaCheck } from "@/utils/pwaCheck";

export const InstallPwaButton: FC<IInstallPwaButton> = ({ deferredPrompt }) => {
  const isPWA = pwaCheck();

  // Check on IOS device
  const isIos =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Check on Chromium
  const isChromium =
    typeof navigator !== "undefined" &&
    /Chrome|Chromium|Edg/.test(navigator.userAgent) &&
    !/OPR/.test(navigator.userAgent);

  // Custom Install PWA
  // You can put your own notifications in place of "alert()"
  const pwaInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        alert("Installation accepted");
      } else {
        alert("Installation rejected");
      }
    } else if (isPWA || isChromium) {
      alert("PWA installed");
    } else if (isIos) {
      alert("IOS browser, custom installation");
    } else {
      alert("Different browser, non-standard installation");
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={pwaInstall}>CUSTOM BUTTON INSTALL PWA</button>
    </div>
  );
};
