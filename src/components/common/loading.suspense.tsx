import { useEffect } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { Spin } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Loading = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false, parent: "#root" });
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Spin
      className="rotation"
      size="large"
      indicator={<IconLoader2 stroke={1.5} />}
    />
  );
};

export default Loading;
