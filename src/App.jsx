import { useState } from "react";
import Form from "./components/Form";
import Cards from "./pages/Cards";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Layout>
        <Cards>
          <Form />
        </Cards>
      </Layout>
    </>
  );
}

export default App;
