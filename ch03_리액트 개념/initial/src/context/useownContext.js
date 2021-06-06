import React, { createContext, useState } from "react";

const UserContext = createContext({ username: "", helloCount: 0 });
const SetUserContext = createContext(() => {});

function UseownContext() {
  const [user, setUser] = useState({ username: "mike", helloCount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <div />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

export default UseownContext;
