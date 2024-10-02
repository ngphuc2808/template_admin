type LocaleResource = Record<string, string>;

type ApiResponseType<T> = {
  retCode: number;
  data: T;
  retText: string;
};

type ErrorBoundaryChildrenType = {
  children: React.ReactNode;
};

type ErrorBoundaryType = {
  hasError: boolean;
};

type WrapperRouteComponentType = {
  titleId: string;
  children: React.ReactNode;
};

type RenderIfType = {
  content: React.ReactNode;
  isTrue: boolean;
};

type RenderIfMultiType = {
  trueContent: React.ReactNode;
  falseContent: React.ReactNode;
  isTrue: boolean;
};

type ScreenProviderType = {
  children: React.ReactNode;
};

type ScreenPropsType = {
  fallback?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  device: ScreenType;
} & (
  | {
      accept: true;
      deny?: never;
    }
  | {
      deny: true;
      accept?: never;
    }
);

type ParamsUploadS3Type = {
  filename: string;
  filetype: string;
  base64: string;
  userID: string;
  type: string;
  uploadDir: string;
};

type ConvertFileToBase64ResultType = {
  fileName: string;
  base64: string;
};

type IconToggleThemeModeType = {
  width?: number;
  height?: number;
  color?: string;
  themeMode: string;
  setThemeMode: (value: string) => void;
};
