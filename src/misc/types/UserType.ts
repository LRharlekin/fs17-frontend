import type { UserRegisterType } from "./UserRegisterType";

export type UserType = UserRegisterType & {
  role: "customer" | "admin" | null;
  id: number | null;
  creationAt?: string;
  updatedAt?: string;
};
