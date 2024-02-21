import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "../prelogin/registration"
import Prehomescreen from "../prelogin/prehomescreen"
import Login from "../prelogin/login"
import PreNavbar from "../prelogin/prenavbar"
import Posthomescreen from "../postlogin/posthomescreen"
import abouttask from "../prelogin/abouttask"
import TaskForm from "../postlogin/addtask"
import ReminderForm from "../postlogin/reminder"
import TaskList from "../postlogin/tasklist"







const Navigation=(task)=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Prehomescreen}></Route>
            <Route path="/registration" Component={Registration}></Route>
            <Route path="/prenavbar" Component={PreNavbar}></Route>
            <Route path="/login" Component={Login}></Route>s
            <Route path="/Posthomescreen" Component={Posthomescreen}></Route>
            <Route path="/abouttask" Component={abouttask}></Route>
            <Route path="/addtask" Component={<TaskForm task={task}/>}></Route>
            <Route path="/reminder" Component={ReminderForm}></Route>
            <Route path="/tasklist" Component={<TaskList task={task}></TaskList>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation