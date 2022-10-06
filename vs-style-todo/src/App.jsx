import { useState } from "react";
// import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col  items-center">
      <div className="w-4/6 h-full">
        <Header />
        <HeaderMenu />
        <div className="flex flex-row  h-5/6">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
