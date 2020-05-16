export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Document {
  id?: bigint;
  title: string;
  description: string;
  link: string;
  body: string;
  author: string;
  dateTime?: string;
}

export interface News {
  id?: bigint;
  title: string;
  body: string;
  author:string;
  date?: string;
}
