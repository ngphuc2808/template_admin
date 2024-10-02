import { Flex, Result, theme } from "antd";
import { useTranslation } from "react-i18next";

const ForbiddenPage = () => {
  const { t } = useTranslation();

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
      justify="center"
      align="center"
    >
      <Result
        status="403"
        title="403"
        subTitle={t("CORE:page.forbidden.content")}
      />
    </Flex>
  );
};

export default ForbiddenPage;
