import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';     //Router doesn't work in gihub pages

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000)
  }


  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';  //Change the title Dynamically
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';     //Change the title Dynamically
    }
  }

  return (
   <> 
   {/* <Router> */}
   {/* <Navbar title="TextUtils" aboutText="About"/> */}
   {/* <Navbar/> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About/>}/> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    {/* </Routes> */}
  </div>
{/* </Router> */}
  </>
  );
}

export default App;
