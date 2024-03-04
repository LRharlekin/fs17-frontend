import React from "react";
import { Container as ContainerMUI } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  display?: string;
  flexDirection?: string;
  disableGutters?: boolean;
};

const Container = ({
  children,
  component = "div",
  display = "flex",
  flexDirection = "column",
  disableGutters = false,
}: ContainerProps) => {
  return (
    <ContainerMUI
      component={component}
      maxWidth="lg"
      sx={{ display, flexDirection }}
      disableGutters={disableGutters}
      // alignItems="center"
    >
      {children}
    </ContainerMUI>
  );
};

export default Container;
