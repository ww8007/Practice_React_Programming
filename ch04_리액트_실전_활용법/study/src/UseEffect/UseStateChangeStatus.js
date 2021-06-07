import React, { useEffect, useState } from "react";

function UseStateChangeStatus() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
  return <div></div>;
}

export default UseStateChangeStatus;
