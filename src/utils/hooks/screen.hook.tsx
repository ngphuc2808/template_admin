import { useContext, useMemo } from "react";

import { ScreenType } from "@/utils/enum";
import { ScreenContext } from "@/components/common/screen.provider";

const useScreenWidth = () => {
  const { deviceType, screenWidth } = useContext(ScreenContext);

  const result = useMemo(() => {
    const isMobile = deviceType === ScreenType.MOBILE;
    const isTablet = deviceType === ScreenType.TABLET;
    const isDesktop = deviceType === ScreenType.DESKTOP;
    return { deviceType, screenWidth, isMobile, isTablet, isDesktop };
  }, [deviceType, screenWidth]);

  return result;
};

export { useScreenWidth };
