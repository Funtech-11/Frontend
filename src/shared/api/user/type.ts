type TLoginData = {
  email: string;
  password: string;
};

type TLoginResponse = {
  auth_token: string;
};

export type { TLoginData, TLoginResponse };
