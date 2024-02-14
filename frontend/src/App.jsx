import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashbard from "./pages/Dashbard";
import Transfer from "./pages/Transfer";
function App() {

  return (
   <>
      
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashbard/>}/>
        <Route path="/transfer" element={<Transfer/>}/>
      </Routes>
     
   </>
  )
}

export default App
