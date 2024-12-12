import { PropsWithChildren } from "react";

export const Container = ({
  className = "",
  children,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};
