import { Flex, Layout } from "antd";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const { t } = useTranslation();

  return (
    <Layout.Footer className="main-footer">
      <Flex align="center" gap={6}>
        © 2024, {t("CORE:made_with")}&nbsp;
        <a href="https://matbao.ws" target="_blank">
          <figure>
            <img src={""} alt="logo" />
          </figure>
        </a>
      </Flex>
    </Layout.Footer>
  );
};

export default MainFooter;
