import clsx from "clsx";
import React, { useState } from "react";
import { predict } from "../api/predict";
import { resultPlants } from "../state/hasil";
import { useSetRecoilState, useRecoilValue } from 'recoil';

function Form() {
  const [formValues, setFormValues] = useState({});
  const setResultPlants = useSetRecoilState(resultPlants);
  const getAtom = useRecoilValue(resultPlants);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await predict(formValues);
    setResultPlants(res.data)
    console.log({getAtom})

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={clsx("row")}>
        <div className={clsx("col")}>
          <div className={clsx("form-group")}>
            <label htmlFor="kelembapan">Kelembapan:</label>
            <input
              type="text"
              className={clsx("form-control")}
              id="kelembapan"
              name="kelembapan"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={clsx("col")}>
          <div className={clsx("form-group")}>
            <label htmlFor="temperature">Temperatur:</label>
            <input
              type="text"
              className={clsx("form-control")}
              id="temperature"
              name="temperature"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className={clsx("row mt-3")}>
        <div className={clsx("col")}>
          <div className={clsx("form-group")}>
            <label htmlFor="soilTemperature">Soil Temperatur:</label>
            <input
              type="text"
              className={clsx("form-control")}
              id="soilTemperature"
              name="soilTemperature"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={clsx("col")}>
          <div className={clsx("form-group")}>
            <label htmlFor="soilMoisture">Soil Moisture:</label>
            <input
              type="text"
              className={clsx("form-control")}
              id="soilMoisture"
              name="soilMoisture"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className={clsx("row mt-3")}>
        <div className={clsx("col")}>
          <div className={clsx("form-group")}>
            <label htmlFor="curahHujan">Curah Hujan:</label>
            <input
              type="text"
              className={clsx("form-control")}
              id="curahHujan"
              name="curahHujan"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={clsx("col")}>
          <div className={clsx("form-group")}>
            <label htmlFor="luas">Luas:</label>
            <input
              type="text"
              className={clsx("form-control")}
              id="luas"
              name="luas"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button type="submit" className={clsx("btn", "btn-primary", "mt-3")}>
        Submit
      </button>
    </form>
  );
}

export default Form;
