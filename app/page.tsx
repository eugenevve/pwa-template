"use client";
import { useOnlineStatus } from "@/hooks/useOnline";
import Offline from "./offline";
import { InstallPwaButton } from "@/components/InstallPwaButton";
import { pwaCheck } from "@/utils/pwaCheck";
import { usePwaInstallPrompt } from "@/hooks/usePwaInstallPrompt";

import styles from "./page.module.css";

export default function Page() {
  const isOnline = useOnlineStatus();
  const isPWA = pwaCheck();
  const { deferredPrompt } = usePwaInstallPrompt();

  const installing = (
    <div className={styles.container}>
      {isPWA ? (
        <p>PWA installed</p>
      ) : (
        <InstallPwaButton deferredPrompt={deferredPrompt} />
      )}
    </div>
  );

  return isOnline ? (
    <>{installing}</>
  ) : (
    <>
      {installing}
      <Offline />
    </>
  );
}
