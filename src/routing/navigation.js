import { BrowserRouter, Route, Routes } from "react-router-dom"
import Posthomescreen from "../postlogin/posthomescreen"
import TaskForm from "../postlogin/addtask"
import ReminderForm from "../postlogin/reminder"


const Navigation=(task)=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Posthomescreen}></Route>
            <Route path="/addtask" Component={<TaskForm task={task}/>}></Route>
            <Route path="/reminder" Component={ReminderForm}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation