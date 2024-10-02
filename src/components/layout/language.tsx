import { Avatar, Button, Dropdown, Flex } from "antd";
import { useRecoilState } from "recoil";

import { localeState } from "@/atoms/global.state";
import images from "@/assets/images";

const Language = () => {
  const [locale, setLocale] = useRecoilState(localeState);

  const listLocale = [
    {
      label: (
        <Flex align="center" gap={6}>
          <Avatar src={images.flagEN} alt="en_US" size={22} />
          English
        </Flex>
      ),
      key: "en",
      photo: images.flagEN,
      onClick: () => setLocale("en_US"),
    },
    {
      label: (
        <Flex align="center" gap={6}>
          <Avatar src={images.flagVN} alt="en_US" size={22} />
          Tiếng Việt
        </Flex>
      ),
      key: "vi",
      photo: images.flagVN,
      onClick: () => setLocale("vi_VN"),
    },
  ];

  const currentLang =
    listLocale?.find((it) => it.key === locale) || listLocale[1];

  return (
    <Dropdown
      overlayClassName="dropdown-language"
      menu={{ items: listLocale }}
      placement="bottom"
      arrow
      trigger={["click"]}
    >
      <Button
        type="text"
        className="icon-btn"
        style={{
          width: 40,
          height: 40,
        }}
      >
        <Avatar src={currentLang.photo} alt={currentLang.key} size={22} />
      </Button>
    </Dropdown>
  );
};

export default Language;
