import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";

// const toggle = () =>

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
    // console.log("Open Via Header Car button");
  };

  return (
    <CartProvider>
      <Header toggle={toggle} />
      <main>
        <Modal toggle={toggle} show={showModal} setShow={setShowModal} />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
