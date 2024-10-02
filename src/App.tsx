import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import viVN from "antd/locale/vi_VN";

import router from "@/routers/index.router";
import { localeState, themeState } from "@/atoms/global.state";
import { darkTheme, lightTheme } from "@/utils/constants";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: ForwardedRef<T>) => React.ReactNode | null
  ): (props: P & RefAttributes<T>) => React.ReactNode | null;
}

const App = () => {
  const locale = useRecoilValue(localeState);
  const themeMode = useRecoilValue(themeState);

  const {
    i18n: { changeLanguage },
  } = useTranslation();

  useEffect(() => {
    changeLanguage(locale);
  }, [locale]);

  return (
    <ConfigProvider
      locale={locale === "en" ? enUS : viVN}
      theme={{
        token: {
          fontFamily: "Roboto, sans-serif",
          ...(themeMode === "dark" ? darkTheme.token : lightTheme.token),
        },
        components: {
          ...(themeMode === "dark"
            ? darkTheme.components
            : lightTheme.components),
        },
      }}
    >
      <RouterProvider router={router()} />
    </ConfigProvider>
  );
};

export default App;
