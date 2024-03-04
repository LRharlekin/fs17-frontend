import React from "react";

import Skeleton from "@mui/material/Skeleton";

type SkeletonProps = {
  key?: string;
  animation?: "wave" | "pulse" | false;
  width?: number;
  height?: number;
  children?: React.ReactNode | JSX.Element;
};

// For variant="text", adjust the height via font-size
export const SkeletonText = ({
  animation = "wave",
  children,
}: SkeletonProps) => {
  return (
    <Skeleton
      variant="text"
      animation={animation}
      sx={{
        fontSize: "1rem",
      }}
      children
    />
  );
};

// For other variants, adjust the size with `width` and `height`

export const SkeletonCircle = ({
  animation = "wave",
  width,
  height,
  children,
}: SkeletonProps) => {
  return (
    <Skeleton
      variant="circular"
      animation={animation}
      width={width}
      height={height}
    />
  );
};

export const SkeletonRectangle = ({
  animation = "wave",
  width,
  height,
  children,
}: SkeletonProps) => {
  return (
    <Skeleton
      variant="rounded"
      animation={animation}
      width={width}
      height={height}
    />
  );
};
