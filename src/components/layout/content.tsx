import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Loading from "@/components/common/loading.suspense";

const MainContent = () => {
  return (
    <Layout.Content className="main-content">
      <div className="main-content__body">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Layout.Content>
  );
};

export default MainContent;
