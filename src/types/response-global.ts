type ResponseType = {
  code?: number;
  status: boolean;
  message: string;
  data?: any;
};

type LoginDataType = {
  deviceId: string;
  accessToken: string;
  refreshToken: string;
};

export type { ResponseType, LoginDataType };
