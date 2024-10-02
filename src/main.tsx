import "antd/dist/reset.css";
import "@/styles/global.scss";
import "@/styles/antd-custom.styles.scss";
import "@/styles/reset.styles.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import "./i18n.ts";

import App from "@/App.tsx";
import { ScreenProvider } from "@/components/common/screen.provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <ScreenProvider>
          <App />
        </ScreenProvider>
      </RecoilRoot>
    </HelmetProvider>
  </StrictMode>
);
