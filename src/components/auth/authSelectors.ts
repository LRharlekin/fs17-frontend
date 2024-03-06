import type { AppState } from "../../app/store";

export const selectCurrentUserEmail = (state: AppState) => state.auth.email;
export const selectCurrentUserAvatar = (state: AppState) => state.auth.avatar;
export const selectCurrentUserName = (state: AppState) => state.auth.name;
export const selectCurrentToken = (state: AppState) => state.auth.token;
export const selectCurrentRefreshToken = (state: AppState) =>
  state.auth.refreshToken;
export const selectCurrentUserRole = (state: AppState) => state.auth.role;
