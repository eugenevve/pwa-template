import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { Head } from "./components/Head";
import { SplashScreen } from "./components/SplashScreen";
import { useOnlineStatus } from "./hooks/useOnline";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Offline } from "./pages/Offline";

export const App: FC = () => {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <Offline />;
  }

  return (
    <>
      <Head />
      <SplashScreen />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
