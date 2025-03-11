import { FC } from "react";

import styles from "./Offline.module.css";

export const Offline: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>No internet</div>
    </div>
  );
};
