import React, { useState } from "react";
import { useCallback } from "react";

function Callback() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);
  return <div></div>;
}

export default Callback;
