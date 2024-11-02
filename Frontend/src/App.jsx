import { Button } from "./components/button"
import { Header } from "./components/header"
import { SearchBar } from "./components/searchbar"
import Records from "./images/Records.png"
import Medications from './images/Medications.png'
import Appointments from './images/Appointments.png'
import Lab from './images/Lab.png'
import Precautions from './images/Precautions.png'
import Reminder from './images/Reminder.svg'
import Bell from './images/bell.svg'
import Updates from './images/updates.svg'
import Chronic from './images/Chronic.svg'
import Allergies from './images/Allergies.svg'
import { Card } from "./components/card"

function App(){
  return(
    <div className="bg-[#f6fffb] h-screen" >
      <Header text={"Login"}></Header>
      <SearchBar text={"Search records, appointments ,insurance ..."}></SearchBar>
      <div className="flex justify-evenly px-10 py-10 bg-[#F6FFFBC7] h-[150px]">
        <Button color={"bg-[#E5FDFF]"} text={"Records"} image={Records}></Button>
        <Button color={"bg-[#FFF4FA]"} text={"Medications"} image={Medications}></Button>
        <Button color={"bg-[#FFF7DD]"}text={"Appointments"} image={Appointments}></Button>
        <Button color={"bg-[#E6F9E3]"}text={"Lab"} image={Lab}></Button>
        <Button color={"bg-[#EFEEFD]"}text={"Precautions"} image={Precautions}></Button>
      </div>
      <div className="flex px-[80px] justify-between bg-[#f6fffb]">
        <Card text={"Reminder"} image={Reminder} ></Card>
        <Card text={"Appointments"} image={Bell}></Card>
        <Card text={"Updates"} image={Updates} ></Card>
        <Card text={"Chronic Conditions"} image={Chronic}></Card>
        <Card text={"Alergies"} image={Allergies}></Card>
      </div>
    </div>
  )
}
export default App