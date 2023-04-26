import clsx from "clsx";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav
        className={clsx(
          "navbar bg-body-tertiary navbar-expand-lg"
        )}
      >
        <div className={clsx("container-fluid")}>
          <a className={clsx("navbar-brand")} href="#">
            <div className={clsx("d-flex")}>
              <img
                src="../public/icon.png"
                alt="Logo"
                width="90"
                height="72"
                className={clsx("d-inline-block align-text-top text-start")}
              />
              <h4 className={clsx("my-auto ms-3")}>AgroAi</h4>
            </div>
          </a>
          <button
            className={clsx("navbar-toggler")}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={clsx("navbar-toggler-icon")}></span>
          </button>
          <div className={clsx("collapse navbar-collapse")} id="navbarNavAltMarkup">
            <div className={clsx("navbar-nav ms-auto h5")}>
              <a className={clsx("nav-link active")} aria-current="page" href="#">
                Home
              </a>
              <a className={clsx("nav-link")} href="#">
                Fitur
              </a>
              <a className={clsx("nav-link")} href="#">
                FAQ
              </a>
              <a className={clsx("nav-link")}>Tentang</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
