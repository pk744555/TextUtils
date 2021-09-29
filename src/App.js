import './App.css';
import Alert from './Componants/Alert';
// import About from './Componants/About';
import Navbar from './Componants/Navbar';
import Textform from './Componants/Textform';
import React ,{useState} from 'react'

function App() {
  const [alert, setalert] = useState(null);

  const showAlert  =(message, type) =>{
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
   <Navbar title="TextUtils" aboutText="About TextUtils"/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showAlert={showAlert} heading="Enter the text to analyze below"/>
   </div> 
  {/* <About/> */}
   
    </>
    );
}

export default App;
