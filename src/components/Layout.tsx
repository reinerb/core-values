import React from "react";
import { twMerge } from "tailwind-merge";

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function Layout({ children, className }: MainLayoutProps) {
  return (
    <div className="grid min-h-screen place-items-center">
      <main
        className={twMerge(
          "mx-4 flex flex-col items-center justify-center md:mx-8 md:my-4",
          className,
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
