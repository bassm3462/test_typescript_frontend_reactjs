import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Auth/Login";
import Dashboard from "./component/Auth/Dashboard"
import Register from "./component/Auth/RIGESTER";
import KeepAlive from "./component/page/KeepAlive"
// import Feature from "./component/page/feture";
import TestnVR from "./component/page/registerOrLogin";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path= "/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/keepalive" element={<KeepAlive/>}></Route>
        {/* <Route path="/feature" element={<Feature/>}></Route> */}
        <Route path="/registerOrLogin" element ={<TestnVR/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
