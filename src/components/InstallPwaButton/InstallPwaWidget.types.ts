export interface IInstallPwaWidget {
  deferredPrompt?: BeforeInstallPromptEvent | null;
}

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
