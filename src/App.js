import React from "react";
import "./App.css";
import Template from "./Template";
import UserProvider from "./Component/Context/UserContext";
import UserContainer from "./Component/Container/UserContainer";

function App() {
  return (
    <Template className="App">
      <UserProvider>
        <UserContainer />
      </UserProvider>
    </Template>
  );
}

export default App;
