type TLoginData = {
  email: string;
  password: string;
};

type TLoginResponse = {
  access_token: string;
};

export type { TLoginData, TLoginResponse };
