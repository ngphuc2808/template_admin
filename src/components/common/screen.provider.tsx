import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { ScreenType } from "@/utils/enum";

const ScreenContext = createContext<{
  deviceType: ScreenType;
  screenWidth: number;
}>(undefined as any);

const ScreenProvider = ({ children }: ScreenProviderType) => {
  const [screenWidth, setScreenWidth] = useState<number>(window?.innerWidth);

  const deviceType = useMemo(() => {
    if (screenWidth < 576) {
      return ScreenType.MOBILE;
    }
    if (screenWidth < 992) {
      return ScreenType.TABLET;
    }
    return ScreenType.DESKTOP;
  }, [screenWidth]);

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(window?.innerWidth);
    };

    window?.addEventListener("resize", onResize);
    return () => {
      window?.removeEventListener("resize", onResize);
    };
  }, []);

  const data = useMemo(() => {
    return { screenWidth, deviceType };
  }, [screenWidth, deviceType]);

  return (
    <ScreenContext.Provider value={data}>{children}</ScreenContext.Provider>
  );
};

const Screen = ({
  fallback = null,
  children,
  device,
  accept,
  deny,
}: ScreenPropsType) => {
  const { deviceType } = useContext(ScreenContext);
  if (accept) {
    if (device === deviceType) {
      return <>{children}</>;
    }
  }
  if (deny) {
    if (device !== deviceType) {
      return <>{children}</>;
    }
  }
  return <>{fallback}</>;
};

export { ScreenContext, ScreenProvider, Screen };
