import { Button } from "./components/button"
import { Header } from "./components/header"
import { SearchBar } from "./components/searchbar"
import Records from "./images/Records.png"
import Medications from './images/Medications.png'
import Appointments from './images/Appointments.png'
import Lab from './images/Lab.png'
import Precautions from './images/Precautions.png'
import { Card } from "./components/card"

function App(){
  return(
    <div>
      <Header text={"Login"}></Header>
      <SearchBar text={"Search records, appointments ,insurance ..."}></SearchBar>
      <div className="flex justify-between px-10 py-10 bg-[#F6FFFBC7] h-[150px]">
        <Button color={"bg-[#E5FDFF]"} text={"Records"} image={Records}></Button>
        <Button color={"bg-[#FFF4FA]"} text={"Medications"} image={Medications}></Button>
        <Button color={"bg-[#FFF7DD]"}text={"Appointments"} image={Appointments}></Button>
        <Button color={"bg-[#E6F9E3]"}text={"Lab"} image={Lab}></Button>
        <Button color={"bg-[#EFEEFD]"}text={"Precautions"} image={Precautions}></Button>
      </div>
      <div className="flex px-[80px] justify-between bg-[#F6FFFBC7]">
        <Card text={"Records"}></Card>
        <Card text={"Appointments"}></Card>
        <Card text={"Updates"}></Card>
        <Card text={"Chronic Conditions"}></Card>
      </div>
    </div>
  )
}
export default App