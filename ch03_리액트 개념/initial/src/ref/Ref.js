import React, { useRef, useEffect } from "react";

function Ref() {
   const inputRef = useRef();

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   return (
      <div>
         <input type="text" ref={inputRef} />
         <button>저장</button>
      </div>
   );
}

export default Ref;
