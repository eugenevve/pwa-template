"use client";
import { useEffect } from "react";
import iosPWASplash from "@/utils/iosPwaSplash";

export default function SplashScreen() {
  useEffect(() => {
    iosPWASplash("/favicons/favicon-512-512.png", "#000000");
  }, []);
  return null;
}
