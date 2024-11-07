import { Home } from "./Pages/Home.jsx";
import PrevRecords from "./Pages/PrevRecords.jsx";
import { Signup } from "./Pages/signup.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/records' element={<PrevRecords/>}></Route>
        </Routes>
       </BrowserRouter>

      </div>
  )
}
export default App;