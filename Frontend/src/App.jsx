import { Button } from "./components/button"
import { Header } from "./components/header"
import { SearchBar } from "./components/searchbar"
function App(){
  return(
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <div className="flex justify-between px-10 py-10 bg-[#F6FFFBC7] h-[150px]">
        <Button color={"bg-sky-100"} text={"Records"} image={"../assets/icon.png"}></Button>
        <Button text={"Medications"} ></Button>
        <Button text={"Appointments"}></Button>
        <Button text={"Lab"}></Button>
        <Button text={"Precautions"}></Button>
      </div>
    </div>
  )
}
export default App