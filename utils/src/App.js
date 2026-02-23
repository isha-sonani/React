import { useState } from 'react';
import './App.css'
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform"


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
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
    <>
    <Navbar title = {"Textutils"} mode={mode} toggleMode={toggleMode} />
    {/* <About/> */}
    <Textform mode={mode}/>
   
    </>
  );
}

export default App;

