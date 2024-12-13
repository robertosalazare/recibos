import { PropsWithChildren } from "react";
import { Container } from "./Container";

export const PageContent = ({
  children,
  title = "",
}: PropsWithChildren & { title?: string }) => {
  return (
    <Container className="mt-8">
      {title && <h1 className="mb-8 text-4xl font-bold">{title}</h1>}
      {children}
    </Container>
  );
};
