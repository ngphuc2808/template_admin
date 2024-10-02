import "@/modules/home/styles/styles.scss";

import { Col, Row } from "antd";
import { useRecoilValue } from "recoil";

import { themeState } from "@/atoms/global.state";
import images from "@/assets/images";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const themeMode = useRecoilValue(themeState);

  return (
    <Row className="dashboard-container">
      <Col
        lg={14}
        md={24}
        sm={24}
        xs={24}
        className="dashboard-container__content"
        style={{
          background: themeMode === "light" ? "#ecf2ff" : "#555",
        }}
      >
        <Row>
          <Col xs={24} md={14}>
            <h3 className="title">{t("Home:title.welcome")}</h3>
            <p className="description">{t("Home:description.welcome")}</p>
          </Col>
          <Col xs={24} md={10}>
            <figure className="photo">
              <img src={images.welcomeBg} />
            </figure>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
