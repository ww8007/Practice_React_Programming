import React, { useCallback, useState } from "react";

function Hi() {
   const [text, setText] = useState(INITAL);
   const [showText, setShowText] = useState(true);
   const setInitialText = useCallback((ref) => ref && setText(INITAL), []);
   return (
      <div>
         {showText && (
            <input
               type="text"
               ref={setInitialText}
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
         )}
         <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
         <div>hi</div>
      </div>
   );
}

const INITAL = "안녕하세요";

export default Hi;
