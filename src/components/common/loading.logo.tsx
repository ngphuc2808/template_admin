import { Flex, Spin, theme } from "antd";
import { IconLoader2 } from "@tabler/icons-react";

import images from "@/assets/images";

const LoadingSpin = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Flex
      style={{
        position: "fixed",
        inset: 0,
        background: colorBgContainer,
      }}
      className="loadding-spin"
      vertical
      align="center"
      justify="center"
      gap={20}
    >
      <figure
        style={{
          width: 120,
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={images.logo}
        />
      </figure>
      <Spin
        className="rotation"
        size="large"
        indicator={<IconLoader2 stroke={1.5} />}
      />
    </Flex>
  );
};

export default LoadingSpin;
