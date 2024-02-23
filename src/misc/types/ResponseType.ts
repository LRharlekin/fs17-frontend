import type { UserType } from "./UserType";

export type AuthTokenResponse = {
  access_token: string;
  refresh_token: string;
};

export type AuthUserSessionResponse = Omit<UserType, "token" | "refreshToken">;
