import React from "react";
import { Container } from "react-bootstrap";
import { TopNav } from "./TopNav";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <TopNav />
      {/* dynamic content */}
      <main className="main">
        <Container>{children}</Container>
      </main>

      {/* Footer */}

      <footer className="footer bg-dark text-light p-5 text-center">
        &copy; Copyright all rights reserved. Build by Me.
      </footer>
    </div>
  );
};
