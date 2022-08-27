import React from "react";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4">{children}</main>
    </>
  );
};

export default Layout;
