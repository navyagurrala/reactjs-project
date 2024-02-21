import { Link, useNavigate } from "react-router-dom"
// import Registration from "./registration"




const PreNavbar=()=>{
    const navigate=useNavigate()

    const handlenavg=()=>{
        navigate("/registration")
    }

    const handleabout=()=>{
        navigate("/abouttask")
    }
    return(
      <>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand text-white" href="#">TASKA MANAGER & REMINDER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active text-white" href="#">HOME</a>
      <a onClick={handleabout}  className="nav-item nav-link text-white" href="#">ADD TASK</a>
      <a  onClick={handlenavg}   className="nav-item nav-link text-white" href="#">SIGN UP</a>
    </div>
  </div>
</nav>




        {/* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"blue"}}>
  <a classNameName="navbar-brand" href="#">TASK-MANAGER</a>
  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span classNameName="navbar-toggler-icon"></span>
  </button>
  <div classNameName="collapse navbar-collapse" id="navbarNav">
    <ul classNameName="navbar-nav">
      <li classNameName="nav-item active">
      <a classNameName="nav-link" href="#">HOME</a>
      </li>
      <li classNameName="nav-item active">        
      <a onClick={handleabout} classNameName="nav-link" href="#">ADD TASK</a>
      </li>
      <li classNameName="nav-item active">        
      <a  onClick={handlenavg} classNameName="nav-link" href="#">SIGN UP</a>
      </li>
    </ul>
  </div>
</nav> */}
        </>
    )
}
export default PreNavbar