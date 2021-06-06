import React, { useState, useEffect } from "react";

export default function App() {
   const [width, setWidth] = useState(window.innerWidth);
   useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", onResize);
      return () => {
         window.removeEventListener("resize", onResize);
      };
   }, []);

   return <div>{`widht is ${width}`}</div>;
}
