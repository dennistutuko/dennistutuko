import React from "react";

import Sect1 from "./components/sect-1/sect-1.component";
import Sect2 from "./components/sect-2/sect-2.component";
import Header from "./components/header/header.component";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sect1 />
        <Sect2 />
      </div>
    );
  }
}

export default App;
