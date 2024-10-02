import { useRecoilValue, useRecoilState } from "recoil";
import { Layout, Flex, Button, Avatar, Popover, Divider, theme } from "antd";

import { logout } from "@/utils/methods";
import { themeState, userDataState } from "@/atoms/global.state";
import images from "@/assets/images";
import Language from "./language";
import IconToggleThemeMode from "@/components/common/theme.mode";
import { useTranslation } from "react-i18next";
import { IconMenu2, IconPower } from "@tabler/icons-react";

type HeaderType = {
  isDesktop: boolean;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const MainHeader = ({ isDesktop, collapsed, setCollapsed }: HeaderType) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { t } = useTranslation();

  const userData = useRecoilValue(userDataState);
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  const contentPopover = () => {
    return (
      <div className="content">
        <Flex align="center" gap={12}>
          <Avatar size={85} src={images.defaultAvatar} alt="avatar" />
          <div className="main-content">
            <h3 className="name">{userData?.name ?? userData?.user}</h3>
            <p className="roles">{userData?.roles}</p>
          </div>
        </Flex>
        <Divider />
        <Button
          size="large"
          className="logout-btn"
          icon={<IconPower />}
          onClick={logout}
        >
          {t("CORE:page.login.form.logout")}
        </Button>
      </div>
    );
  };

  return (
    <Layout.Header
      className="main-header"
      style={{
        background: colorBgContainer,
        borderBottom:
          themeMode === "light" ? "1px solid #e5eaef" : "1px solid #555",
      }}
    >
      <Flex justify="space-between" align="center" flex={1}>
        <Button
          type="text"
          className="icon-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <IconMenu2 />
        </Button>
        <Flex align="center" gap={6}>
          <Button
            type="text"
            className="icon-btn"
            style={{
              width: 53,
              height: 53,
            }}
          >
            <IconToggleThemeMode
              themeMode={themeMode}
              setThemeMode={setThemeMode}
            />
          </Button>
          <Language />
          <Popover
            placement="bottomRight"
            title={t("CORE:profile")}
            content={contentPopover()}
            overlayClassName="custom-popover"
            arrow={true}
            trigger={["click"]}
          >
            <Button
              type="text"
              className="icon-btn"
              style={{
                width: 53,
                height: 53,
              }}
            >
              <Avatar size={35} src={images.defaultAvatar} alt="avatar" />
            </Button>
          </Popover>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default MainHeader;
