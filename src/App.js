import React from "react";
import Listing from "./Listing";
import {loadData} from "./LoadData";
import "./css/main.css";

function App() {
  const data = loadData();
  return (
    <Listing items={data}/>
  );
}

export default App;
