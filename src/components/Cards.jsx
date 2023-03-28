import clsx from "clsx";
import React from "react";

function Cards({ children }) {
  return (
    <div className={clsx("card")}>
      <h5 className={clsx("card-header")}>
        Prediksi Jenis Tanaman dan Hasil Produktivitas
      </h5>
      <div className={clsx("card-body")}>{children}</div>
    </div>
  );
}

export default Cards;
