import React, { useState } from "react";

export default function App() {
   const [colors, setColor] = useState("red");
   const [counts, setCount] = useState(0);
   function onClick() {
      setColor("blue");
   }
   const onClick2 = () => {
      setCount(counts + 1);
      setCount(counts + 1);
   };

   return (
      <>
         <button style={{ backgroundColor: colors }} onClick={onClick}>
            좋아요
         </button>
         <br></br>
         <button onClick={onClick2}>up</button>
         <div>{counts}</div>
      </>
   );
}
