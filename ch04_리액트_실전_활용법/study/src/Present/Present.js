import React from "react";
import { useState } from "react";

function Present({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));
  function onChange(key, name) {
    setDoneList(
      doneList.map((item) => (item.key === key ? { ...item, name } : item))
    );
  }
  return <div></div>;
}

export default Present;
