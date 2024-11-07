import { Home } from "./Pages/Home.jsx";
import { Signup } from "./Pages/signup.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
       </BrowserRouter>

      </div>
  )
}
export default App;