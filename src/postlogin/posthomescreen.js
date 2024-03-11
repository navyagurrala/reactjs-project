import TaskForm from "./addtask"
import Postnavbar from "./postnavbar"


const Posthomescreen=({ addTask, tasks, setReminder })=>{
    return(
        <>
        <Postnavbar/>
        <TaskForm addTask={addTask} />
        </>
    )
}
export default Posthomescreen
