import { ShareAndroidIcon, ShareIosIcon } from "@app/ui/Icons";
import { iosCheck } from "@app/utils/iosCheck";
import { FC, useState } from "react";

import styles from "./InstallPwaWidget.module.css";
import { IInstallPwaWidget } from "./InstallPwaWidget.types";

export const InstallPwaWidget: FC<IInstallPwaWidget> = ({ deferredPrompt }) => {
  const [isPwaInstalled, setPwaInstalled] = useState(false);
  const [isPwaInstalledAlternative, setPwaInstalledAlternative] = useState(false);
  const isIos = iosCheck();

  // Basic PWA setup
  const pwaInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setPwaInstalled(true);
      }
    } else if ("getInstalledRelatedApps" in navigator) {
      setPwaInstalled(true);
    } else {
      setPwaInstalledAlternative(true);
    }
  };

  // Alternative installation (instructions)
  const instructionsInstallPWA = (
    <>
      <div className={styles.title}>How to install a website on your device?</div>
      {isIos ? (
        <div className={styles.text}>
          Click on the <ShareIosIcon /> icon and select the «To Home Screen» option from the menu
        </div>
      ) : (
        <div className={styles.text}>
          Click on the <ShareAndroidIcon /> or <ShareIosIcon /> icon and select the «Add to Home or Home Screen» option
          from the menu
        </div>
      )}
    </>
  );

  return (
    <div className={styles.container}>
      {isPwaInstalled ? (
        isPwaInstalledAlternative ? (
          instructionsInstallPWA
        ) : (
          <>
            <div className={styles.title}>The application is already installed</div>
            <div className={styles.text}>Added to your devices home screen</div>
          </>
        )
      ) : (
        <>
          {isPwaInstalledAlternative ? (
            instructionsInstallPWA
          ) : (
            <>
              <div className={styles.title}>Quick installation</div>
              <div className={styles.text}>Add the website to your devices home screen for quick access</div>
              <button onClick={pwaInstall}>Install</button>
            </>
          )}
        </>
      )}
    </div>
  );
};
