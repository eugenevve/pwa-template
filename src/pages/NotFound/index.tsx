import { FC } from "react";

import styles from "./NotFound.module.css";

export const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>404</div>
      <div className={styles.title}>Not Found</div>
    </div>
  );
};
