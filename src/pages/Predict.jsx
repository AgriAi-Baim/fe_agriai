import React from "react";
import Cards from "../components/Cards";
import CardsResult from "../components/CardsResult";
import Form from "../components/Form";
import Layout from "../components/layout/Layout";
import { resultPlants } from "../state/hasil";
import { useRecoilValue } from 'recoil';

const Predict = () => {
  const getPlants = useRecoilValue(resultPlants);

  return (
    <>
      <Layout>
        <Cards>
          <Form />
        </Cards>
        {getPlants.length !== 0 && <CardsResult/>}
      </Layout>
    </>
  );
};

export default Predict;
