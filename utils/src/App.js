import './App.css'
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform"


function App() {
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
    <Navbar title = {"Textutils"}/>
    {/* <About/> */}
    <Textform />
   
    </>
  );
}

export default App;

