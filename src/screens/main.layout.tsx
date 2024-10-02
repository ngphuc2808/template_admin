import { useState } from "react";
import { Layout } from "antd";

import { useScreenWidth } from "@/utils/hooks/screen.hook";
import MainHeader from "@/components/layout/header";
import MainSider from "@/components/layout/sider";
import MainContent from "@/components/layout/content";
import MainFooter from "@/components/layout/footer";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { isDesktop } = useScreenWidth();

  return (
    <Layout className="main-container">
      <MainSider
        isDesktop={isDesktop}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Layout>
        <MainHeader
          isDesktop={isDesktop}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <MainContent />
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
