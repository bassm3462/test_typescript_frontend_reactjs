import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/RIGESTER";
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
