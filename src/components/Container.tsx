import React from "react";
import { Container as ContainerMUI } from "@mui/material";

type Props = {
  children: React.ReactNode;
  component?: React.ElementType;
};

const Container = ({ children, component = "div" }: Props) => {
  return (
    <ContainerMUI component={component} maxWidth="lg">
      {children}
    </ContainerMUI>
  );
};

export default Container;
