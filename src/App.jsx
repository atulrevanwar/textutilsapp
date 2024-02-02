import { useState } from "react";
import Alerts from "./component/Alerts";
import Navbar from "./component/Navbar";
import Textforms from "./component/Textforms";
import Aboutus from "./component/Aboutus";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({ msg: message, type: type})
    setTimeout(() => 
    {
      setAlert(null);
    }, 
      2500 ); 
  }

  return (
    <>
       <Navbar></Navbar>
       <Alerts alerts={alert}/>
      <div className="container">
      <Textforms showAlert={showAlert} heading="Enter Text to Analyze"></Textforms>
      </div>
      <Aboutus/>
    </>
  );
}

export default App;