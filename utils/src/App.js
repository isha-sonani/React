import { useState } from 'react';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import About from "./Component/About"
import Alert from './Component/Alert';



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled","success");
      document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </BrowserRouter>
    
    <Router>
    <Navbar title = {"Textutils"} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    <div className="container" >
      <Routes>
         <Route path='/about' element={<About mode={mode}/>}/>
         <Route path='/' element={<Textform showAlert={showAlert} mode={mode}/>} />
      </Routes>
    </div>
     </Router>
     
  );
}

export default App;

