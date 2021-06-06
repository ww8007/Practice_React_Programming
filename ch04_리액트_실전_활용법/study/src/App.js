import React from "react";
import { useState } from "react";

function App() {
  const [event, isEvent] = useState(true);
  return (
    <div>
      {event && <div>이벤트 중</div>}
      {!event && <div>이벤트 중이 아님</div>}
      <button onClick={() => isEvent(!event)}>클릭</button>
    </div>
  );
}

export default App;
