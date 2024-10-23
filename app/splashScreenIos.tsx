"use client";
import { useEffect } from "react";
import iosPWASplash from "@/utils/iosPwaSplash";

export default function SplashScreenIos() {
  useEffect(() => {
    iosPWASplash("/favicons/favicon-512-512.png", "#37474F");
  }, []);
  return null;
}
