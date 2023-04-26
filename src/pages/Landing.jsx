import clsx from "clsx";
import React from "react";
import Layout from "../components/layout/Layout";
import Nav from "../components/Nav";
import "../../public/style.css";
import { NavLink } from "react-router-dom";


const Landing = () => {


  return (
    <>
      <Layout>
        <Nav />
        <div className={clsx("row mt-5 ms-4")}>
          <div className={clsx("col-lg-6 my-auto")}>
            <h1 className={clsx("custom-font")}>AgroAI</h1>
            <h1 className={clsx("custom-font text-success display-3")}>
              Machine Learning untuk Pertanian
            </h1>
            <p className={clsx("fs-3 fw-light lh-base")}>
              Transformatifkan produktivitas pertanian Anda dengan kekuatan
              machine learning. Platform kami memanfaatkan teknologi terbaru
              untuk mengoptimalkan hasil panen dan meningkatkan operasi
              pertanian Anda.
            </p>
            <NavLink className={clsx("btn btn-success btn-lg")} to="/predict">
              COBA DISINI
            </NavLink>
          </div>
          <div className={clsx("col-lg-6")}>
            <img src="../../public/farming.jpg" width={"100%"} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Landing;
