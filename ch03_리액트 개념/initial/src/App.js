import React from "react";
import Ref from "./ref/Ref";
import Hi from "./ref/Hi";
const UserContext = React.createContext("");

function App() {
   return (
      <div>
         {/* <UserContext.Provider value="mike">
            <div>상단 메뉴</div>
            <Profile />
            <div>하단 메뉴</div>
         </UserContext.Provider> */}
         {/* <Ref></Ref> */}
         <Hi> </Hi>
      </div>
   );
}

const Profile = React.memo(() => {
   return (
      <div>
         <Greeting />
         {/*....*/}
      </div>
   );
});

function Greeting() {
   return (
      <UserContext.Consumer>
         {(username) => <p>{`${username}님 안녕하세요`}</p>}
      </UserContext.Consumer>
   );
}

export default App;
