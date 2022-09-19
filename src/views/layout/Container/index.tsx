import React from "react";

interface ContainerProps {
  children: React.ReactElement | null;
}

export default function Container({ children = null }: ContainerProps) {
  return <div className="min-h-screen">{children}</div>;
}
