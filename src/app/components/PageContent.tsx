import { PropsWithChildren } from "react";
import { Container } from "./Container";

export const PageContent = ({ children }: PropsWithChildren) => {
  return <Container className="mt-8">{children}</Container>;
};
