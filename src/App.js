// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Switch from "react-router-dom";
function App() {
  const [Mode,setMode] = useState('light');
  const tooglemode=()=>{
    if (Mode==='light'){
      setMode("dark");
      document.title="TextUtils-DarkMode"
      setTimeout(() => {
        document.title="TextUtils-Home"
      }, 1000);
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode Enabled","success")
      
    }
    else{
      setMode("light");
      document.title="TextUtils-LightMode"
      setTimeout(() => {
        document.title="TextUtils-Home"
      }, 1000);
      
      document.body.style.backgroundColor="white";
      showAlert("Light mode Enabled","success")
    }

  }
  const [alert,setalert] = useState(null)
  const showAlert=(message,type)=>{
   setalert({
    msg: message,
    type:type
   })
   setTimeout(() => {
    setalert(null);
   }, 1000);
  }
  return (
    <>
    <Router>
<Navbar title="Textutils" mode={Mode} tooglemode={tooglemode}></Navbar>

<Alert alert={alert}></Alert>

<div className="container my-3">
<Switch>
          <Route  exact path="/about">
          <About></About>
          </Route>
          <Route exact path="/">
          <Textform heading="Enter Text Here..." mode={Mode} showalert={showAlert}></Textform>
          </Route>
        </Switch>
  
</div>
</Router>

</>
  );
}

export default App;
