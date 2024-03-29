import { useState } from "react";
import Alerts from "./component/Alerts";
import Navbar from "./component/Navbar";
import Textforms from "./component/Textforms";
import Aboutus from "./component/Aboutus";

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

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
     {/* <BrowserRouter> */}
    <Navbar/>
    <Alerts alerts={alert}/>
    <div className="container">
    <Textforms showAlert={showAlert} heading="Enter Text to Analyze"></Textforms>     
        {/* <Routes>
          <Route index path="/" element={<Textforms showAlert={showAlert} heading="Enter Text to Analyze"></Textforms>}>
            </Route>
          <Route path="/about" element={<Aboutus/>}>
          </Route>

        </Routes>*/}
        </div> 
      {/* </BrowserRouter>  */}
           
    </>
  );
}

export default App;