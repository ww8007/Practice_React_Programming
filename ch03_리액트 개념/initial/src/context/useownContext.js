import React, { createContext, useState } from "react";

const UserContext = createContext({ username: "", helloCount: 0 });
const SetUserContext = createContext(() => {});

function useownContext() {
   const [user, setUser] = useState({ username: "mike", helloCount: 0 });
   return (
      <div>
         <SetUserContext.Provider value={setUser}>
            <UserContext.Provider value={user}>
               <Profile />
            </UserContext.Provider>
         </SetUserContext.Provider>
      </div>
   );
}

export default useownContext;
