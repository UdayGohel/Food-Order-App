import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";

// const toggle = () =>

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
    // console.log("Open Via Header Car button");
  };
  const toggle1 = () => {
    setShowModal(!showModal);
    // console.log("Open Via Modal");
  };

  return (
    <Fragment>
      <Header toggle={toggle} />
      <main>
        <Modal toggle={toggle1} show={showModal} setShow={setShowModal} />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
