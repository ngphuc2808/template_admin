import { Flex, Spin } from "antd";
import { IconLoader2 } from "@tabler/icons-react";

const LoadingPage = () => {
  return (
    <Flex
      style={{
        position: "fixed",
        inset: 0,
        background: "#b9b9b94d",
        zIndex: 9999,
      }}
      className="loadding-spin"
      vertical
      align="center"
      justify="center"
      gap={20}
    >
      <Spin
        className="rotation"
        size="large"
        indicator={<IconLoader2 stroke={1.5} />}
      />
    </Flex>
  );
};

export default LoadingPage;
