import type { UserRegisterType } from "./UserRegisterType";

export type UserType = UserRegisterType & {
  role: "customer" | "admin";
  id: number;
};
