import { message } from "antd";

import { RETCODE } from "@/utils/constants";

type ApiFunction<T, P> = (params: P) => Promise<ApiResponseType<T>>;

const useCallApi = async <T, P>(
  apiFunc: ApiFunction<T, P>,
  params: P,
  msg: string
): Promise<ApiResponseType<T> | null> => {
  try {
    const response = await apiFunc(params);
    if (response.retCode !== RETCODE.SUCCESS) {
      message.error(response.retText);
      return null;
    }
    return response;
  } catch (error) {
    message.error(msg);
    return null;
  }
};

export { useCallApi };
