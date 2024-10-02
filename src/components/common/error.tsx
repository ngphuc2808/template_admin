import { Flex, Result, theme } from "antd";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
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
        status="500"
        title="500"
        subTitle={t("CORE:page.error.content")}
      />
    </Flex>
  );
};

export default ErrorPage;
