import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <>
      <div className="h-[128px]" />
      <header>
        <div className="app-container">
          <div className="row justify-between">
            <div className="logo">
              <Link href="/">JIMMY FERMIN</Link>
            </div>
            <div className="menu">MENU</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
