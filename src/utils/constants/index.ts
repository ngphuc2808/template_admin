export const RETCODE = {
  SUCCESS: 0,
  ERROR: 1,
  WARNING: 2,
};

// Dark Mode Colors
export const darkColors = {
  rowSelectedBg: "#2a2a2a",
  rowHoverBg: "#333333",
  textLight: "#ffffff",
  bgElevated: "#1e1e1e",
  text: "#ffffff",
  bgLayout: "#19222c",
  bgContainer: "#212e3c",
  border: "#434343",
};

// Light Mode Colors
export const lightColors = {
  rowSelectedBg: "#f5f5f5",
  rowHoverBg: "#e6f7ff",
  textLight: "#2a3547",
  bgElevated: "#ffffff",
  text: "#2a3547",
  bgLayout: "#f1f1f1",
  bgContainer: "#ffffff",
  border: "#d9d9d9",
};

export const darkTheme = {
  token: {
    colorBgBase: darkColors.bgLayout,
    colorBgLayout: darkColors.bgLayout,
    colorBgContainer: darkColors.bgContainer,
    colorTextBase: darkColors.text,
    colorBorder: darkColors.border,
  },
  components: {
    Table: {
      rowSelectedBg: darkColors.rowSelectedBg,
      rowSelectedHoverBg: darkColors.rowHoverBg,
    },
    Tooltip: {
      colorBgSpotlight: darkColors.bgElevated,
      colorTextLightSolid: darkColors.textLight,
    },
    Dropdown: {
      colorBgElevated: darkColors.bgElevated,
      colorText: darkColors.text,
    },
    Modal: {
      headerBg: darkColors.bgElevated,
      contentBg: darkColors.bgElevated,
    },
    Drawer: {
      colorBgElevated: darkColors.bgContainer,
      colorText: darkColors.text,
    },
    Popover: {
      colorBgElevated: darkColors.bgElevated,
    },
    Select: {
      colorBgElevated: darkColors.bgElevated,
      optionSelectedBg: darkColors.rowHoverBg,
    },
    Menu: {
      popupBg: darkColors.bgElevated,
    },
  },
};

export const lightTheme = {
  token: {
    colorBgBase: lightColors.bgLayout,
    colorBgLayout: lightColors.bgLayout,
    colorBgContainer: lightColors.bgContainer,
    colorTextBase: lightColors.text,
    colorBorder: lightColors.border,
  },
  components: {
    Table: {
      rowSelectedBg: lightColors.rowSelectedBg,
      rowSelectedHoverBg: lightColors.rowHoverBg,
    },
    Tooltip: {
      colorBgSpotlight: lightColors.bgElevated,
      colorTextLightSolid: lightColors.textLight,
    },
    Dropdown: {
      colorBgElevated: lightColors.bgElevated,
      colorText: lightColors.text,
    },
    Modal: {
      headerBg: lightColors.bgElevated,
      contentBg: lightColors.bgElevated,
    },
    Drawer: {
      colorBgElevated: lightColors.bgElevated,
      colorText: lightColors.text,
    },
    Popover: {
      colorBgElevated: lightColors.bgElevated,
    },
    Select: {
      colorBgElevated: lightColors.bgElevated,
      optionSelectedBg: lightColors.rowHoverBg,
    },
    Menu: {
      popupBg: lightColors.bgElevated,
    },
  },
};
