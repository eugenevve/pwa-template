import iosPWASplash from "@app/utils/iosPwaSplash";
import { FC, useEffect } from "react";

export const SplashScreen: FC = () => {
  useEffect(() => {
    iosPWASplash("/favicons/favicon-512-512.png", "#000000");
  }, []);
  return null;
};
