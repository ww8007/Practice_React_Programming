import React, { useState } from "react";
import Modal from "./modal";
export default function App() {
  const [colors, setColor] = useState("red");
  function onClick() {
    setColor("blue");
  }

  return (
    <>
      <Modal></Modal>
      <button style={{ backgroundColor: colors }} onClick={onClick}>
        좋아요
      </button>
    </>
  );
}
