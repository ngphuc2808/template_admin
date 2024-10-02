import { Button, Flex, Result, theme } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotfoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
        status="404"
        title="404"
        subTitle={t("CORE:page.notFound.content")}
        extra={
          <Button type="primary" onClick={() => navigate("/")} size="large">
            {t("CORE:page.notFound.button")}
          </Button>
        }
      />
    </Flex>
  );
};

export default NotfoundPage;
