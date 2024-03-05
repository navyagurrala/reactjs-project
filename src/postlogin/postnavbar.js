import { useNavigate } from "react-router-dom"
import TaskForm from "./addtask"




const Postnavbar=()=>{

    const remindernavigate=useNavigate()

    const handlenavigate=()=>{
        remindernavigate("/reminder")
    }

  
    return(
         <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"blue"}}>
  <a className="navbar-brand" href="#">TASK-MANAGER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="nav-link" href="#">HOME</a>
      </li>
      <li className="nav-item active">        
      <a className="nav-link" href="#">ADD TASK</a>
      </li>
      
      <li className="nav-item active">        
      <a onClick={handlenavigate}  className="nav-link" href="#">SET-REMINDER</a>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}
export default Postnavbar