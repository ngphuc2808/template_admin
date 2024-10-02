import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { Avatar, Drawer, Flex, Layout, Tooltip, theme } from "antd";
import { IconPower } from "@tabler/icons-react";

import { themeState, userDataState } from "@/atoms/global.state";
import { logout } from "@/utils/methods";
import images from "@/assets/images";
import Menu from "@/components/layout/menu";
import { RenderIfMulti } from "@/components/common/render.if";

type SliderType = {
  isDesktop: boolean;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const MainSider = ({ isDesktop, collapsed, setCollapsed }: SliderType) => {
  const { t } = useTranslation();

  const {
    token: { colorBgLayout, colorTextBase },
  } = theme.useToken();

  const userData = useRecoilValue(userDataState);
  const themeMode = useRecoilValue(themeState);

  return (
    <RenderIfMulti
      isTrue={isDesktop}
      trueContent={
        <Layout.Sider
          width={270}
          theme="light"
          collapsible
          trigger={null}
          collapsed={collapsed}
          className="main-sider"
          style={{
            borderRight:
              themeMode === "light" ? "1px solid #e5eaef" : "1px solid #555",
          }}
        >
          <RenderIfMulti
            isTrue={!collapsed}
            trueContent={
              <figure className="pc-logo">
                <img src={""} alt="logo" />
              </figure>
            }
            falseContent={
              <figure className="mobile-logo">
                <img src={""} alt="logo" />
              </figure>
            }
          />
          <Menu collapsed={collapsed} />
          <RenderIfMulti
            isTrue={collapsed}
            trueContent={
              <div className="signout-block-mini">
                <Tooltip
                  placement="right"
                  title={t("CORE:page.login.form.logout")}
                >
                  <span
                    className="icon-logout"
                    onClick={logout}
                    style={{
                      background: colorBgLayout,
                    }}
                  >
                    <IconPower />
                  </span>
                </Tooltip>
              </div>
            }
            falseContent={
              <div className="signout-block">
                <Flex
                  align="center"
                  gap={6}
                  className="signout-block__content"
                  style={{
                    background: colorBgLayout,
                    color: colorTextBase,
                  }}
                >
                  <Flex align="center" gap={8} flex={1}>
                    <Avatar size={42} src={images.defaultAvatar} alt="avatar" />
                    <div className="signout-block__content__info">
                      <p className="name">{userData?.name ?? userData?.user}</p>
                      <p className="roles">{userData?.roles}</p>
                    </div>
                  </Flex>
                  <Tooltip
                    placement="top"
                    title={t("CORE:page.login.form.logout")}
                  >
                    <span className="icon-logout" onClick={logout}>
                      <IconPower />
                    </span>
                  </Tooltip>
                </Flex>
              </div>
            }
          />
        </Layout.Sider>
      }
      falseContent={
        <Drawer
          width={270}
          placement="left"
          closable={false}
          onClose={() => setCollapsed(true)}
          open={!collapsed}
          className="custom-main-drawer"
        >
          <figure className="pc-logo">
            <img src={""} alt="logo" />
          </figure>
          <Menu collapsed={collapsed} />
          <div className="signout-block">
            <Flex
              align="center"
              gap={6}
              className="signout-block__content"
              style={{
                background: colorBgLayout,
              }}
            >
              <Flex align="center" gap={8} flex={1}>
                <Avatar size={42} src={images.defaultAvatar} alt="avatar" />
                <div className="signout-block__content__info">
                  <p className="name">{userData?.name ?? userData?.user}</p>
                  <p className="roles">{userData?.roles}</p>
                </div>
              </Flex>
              <Tooltip placement="top" title={t("CORE:page.login.form.logout")}>
                <span className="icon-logout" onClick={logout}>
                  <IconPower />
                </span>
              </Tooltip>
            </Flex>
          </div>
        </Drawer>
      }
    />
  );
};

export default MainSider;
