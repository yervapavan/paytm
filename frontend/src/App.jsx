import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashbard from "./pages/Dashbard";
import SendMoney from "./pages/SendMoney";
import InputBox from "./components/InputBox";
import SubHeading from "./components/SubHeading";
import Button from "./components/Button";
function App() {

  return (
   <>
      
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashbard/>}/>
        <Route path="/send" element={<SendMoney/>}/>
      </Routes>
     
   </>
  )
}

export default App
