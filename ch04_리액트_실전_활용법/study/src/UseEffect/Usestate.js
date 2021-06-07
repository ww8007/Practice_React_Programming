import React, { useState } from "react";

function Usestate() {
  const [selectFruit, setSelecFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
}

export default Usestate;
