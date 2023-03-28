import clsx from "clsx";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className={clsx("navbar", "bg-body-tertiary")}>
        <div className={clsx("container-fluid")}>
          <a className={clsx("navbar-brand")} href="#">
            <img
              src="../public/icon.png"
              alt="Logo"
              width="30"
              height="24"
              className={clsx("d-inline-block", "align-text-top")}
            />
            Bootstrap
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
