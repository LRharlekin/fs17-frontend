export type ToString<T> = {
  [K in keyof T]: T[K] extends object ? ToString<T[K]> : string;
};
