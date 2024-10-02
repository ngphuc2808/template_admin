import { useLocation, useNavigate } from "react-router-dom";

import { Menu as MenuAntd } from "antd";

import { getCurrentUrl } from "@/utils/methods";

type MenuType = {
  collapsed: boolean;
};

const Menu = ({ collapsed }: MenuType) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPath = getCurrentUrl(pathname);

  const onMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <MenuAntd
      theme="light"
      mode="inline"
      className={`custom-menu ${collapsed ? "custom-mini-menu" : ""}`}
      items={[]}
      defaultSelectedKeys={[currentPath]}
      onSelect={(it) => onMenuClick(it.key)}
    />
  );
};

export default Menu;
