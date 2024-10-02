import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const themeState = atom<string>({
  key: "theme",
  default: "light",
  effects_UNSTABLE: [persistAtom],
});

export const localeState = atom<string>({
  key: "locale",
  default: "vi",
  effects_UNSTABLE: [persistAtom],
});

export const userDataState = atom<any>({
  key: "dataUser",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
