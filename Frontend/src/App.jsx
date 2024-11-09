import { Home } from "./Pages/Home.jsx";
import { Labrecords } from "./Pages/Labrecords.jsx";
import { Login } from "./Pages/Login.jsx";
import { NurseUpload } from "./Pages/NurseUpload.jsx";
import PrevRecords from "./Pages/PrevRecords.jsx";
import { Hospital } from "./components/hospital.jsx"
import { Signup } from "./Pages/signup.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/records' element={<PrevRecords/>}></Route>
        <Route path='/lab' element={<Labrecords/>}></Route>
        <Route path='/nurse/upload' element={<NurseUpload/>}></Route>

        </Routes>
       </BrowserRouter>

      </div>
  )
}
export default App;