// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [ mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null);  //state for alert


  const showAlert = (message, type)=>{       //Method to show alert messages
     setAlert({ 
      msg: message,
      type: type
     })

     setTimeout(()=>{
      setAlert(null);
     }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "rgb(24 35 45)";
      showAlert("Dark Mode Enabled", "success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enables", "success");

    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
      <Navbar title="textUtils" mode={mode} toggleMode = {toggleMode}/>
      {/* {alert} it is state variable for passing the value in alert state */}
      <Alert alert={alert}/>        
      <div className="container my-3">
      <Textform showAlert={showAlert} heading=" Enter the text to analyse below" mode={mode}/>
      </div>
      <About />

    </>
  );
}

export default App;
