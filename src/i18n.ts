import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from "@/locale/en.json";
import viJSON from "@/locale/vi.json";

const moduleFiles = {
  en: import.meta.glob<{ default: LocaleResource }>(
    "@/modules/**/locale/en.json",
    { eager: true }
  ),
  vi: import.meta.glob<{ default: LocaleResource }>(
    "@/modules/**/locale/vi.json",
    { eager: true }
  ),
};

const loadModules = (locale: "en" | "vi"): LocaleResource => {
  const modules = moduleFiles[locale];
  return Object.assign({}, ...Object.values(modules).map((mod) => mod.default));
};

const enModulesJSON: LocaleResource = loadModules("en");
const viModulesJSON: LocaleResource = loadModules("vi");

i18n.use(initReactI18next).init({
  fallbackLng: "vi",
  lng: "vi",
  resources: {
    en: { ...enJSON, ...enModulesJSON },
    vi: { ...viJSON, ...viModulesJSON },
  },
  ns: ["common"],
  defaultNS: "common",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
