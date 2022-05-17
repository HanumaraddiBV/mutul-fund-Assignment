import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MutulFundData } from "./components/MutulFundData";
import { MutulFundList } from "./components/MutualFundList";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
//icons
function App() {
  const [button1, setIsButton1] = useState(false);
  const [isclick, setIsClick] = useState(false);
  const handleClick = ()=>{
    if(button1){
      setIsButton1(false)
    }else{
      setIsButton1(true)
      setIsClick(false)
    }
  }
  const handleButton = ()=>{
    if(isclick){
      setIsClick(false) 
    }else{
      setIsClick(true)
      setIsButton1(false)
    }
  }
  return (
    <div className="App">
      <div style={{display:"flex",gap:"20px",justifyContent:"center",marginTop:"40px"}}>
        <Button
          label="Top Ten fund based on highest standard deviation"
          className="p-button-raised"
          onClick={handleClick}
        />
        <Button
          label="Top Ten fund based on the returns of last 7 days"
          className="p-button-raised"
          onClick={handleButton}
        />
      </div>
      {button1 && <MutulFundData />}
      {isclick && <MutulFundList />}
    </div>
  );
}

export default App;
