import Footer from "../routing/footer"
import TaskForm from "./addtask"
import Postnavbar from "./postnavbar"
import ReminderForm from "./reminder"
import TaskList from "./tasklist"





const Posthomescreen=({addTask,tasks,setReminder})=>{
    return(
        <>
        
        <Postnavbar/>
        <TaskForm addTask={addTask}/>
        <ReminderForm  setReminder={setReminder}/>
        <TaskList  tasks={tasks}/>
        <Footer/>

        </>
    )
}
export default Posthomescreen