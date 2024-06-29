export function pwaCheck() {
  const isPwa =
    typeof window !== "undefined" &&
    window.matchMedia("(display-mode: standalone)").matches &&
    "standalone";

  return isPwa === "standalone";
}
