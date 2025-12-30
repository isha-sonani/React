
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
 
function App() {
  return (
      <>
      <Navbar title="Textutils"/>
      <div className="container my-3">
      {/* <Textform heading="enter your text"/> */}
      <About/>
      </div>
      </>
  );
}

export default App;
