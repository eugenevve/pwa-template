import { InstallPwaWidget } from "@app/components/InstallPwaButton";
import { usePwaInstallPrompt } from "@app/hooks/usePwaInstallPrompt";
import { pwaCheck } from "@app/utils/pwaCheck";
import { FC } from "react";

import styles from "./Home.module.css";

export const Home: FC = () => {
  const isPWA = pwaCheck();
  const { deferredPrompt } = usePwaInstallPrompt();

  return (
    <div className={styles.container}>
      {isPWA ? <p>PWA installed</p> : <InstallPwaWidget deferredPrompt={deferredPrompt} />}
    </div>
  );
};
