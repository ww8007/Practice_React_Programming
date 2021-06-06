import React from "react";
import Ref from "./ref/Ref";
import Hi from "./ref/Hi";
import Ref_using from "./ref/Ref_using";
import Reducer from "./useReducer/Reducer";
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
      <Ref_using></Ref_using>
      <Reducer></Reducer>
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
