export interface IEmailLogin {
  username: string;
  password: string;
}

export interface IForgotPassword {
  username: string;
}

export interface IResetPassword {
  code: string;
  password: string;
  confirm_password: string;
}

export interface IChangePassword {
  username: string;
  password: string;
  confirm_password: string;
}

export interface IUserData {
  email: string;
  first_name: string;
  last_name: string;
  fullname: string;
  id: string;
  locale: string;
  groups: string[];
}

export interface IAPIError {
  name: string;
  location: string;
  description: string;
}

export interface IAuthResponse {
  status: string;
  message: string;
  user?: IUserData;
  token?: string;
  provider?: string;
  errors?: IAPIError[];
}
