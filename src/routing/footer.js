import React from "react"
// import "./src/react-bootstrap-icons"




const Footer=()=>{
    return(
        <>
<footer className="bg-body-tertiary text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ width:70,height:70}}
        href="#!"
        role="button"
      ><img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" height={45} width={50}></img></a>


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        // style={{ backgroundColor: "#55acee" }}
        style={{ width:70,height:75}}
        href="#!"
        role="button"
      ><img src="https://th.bing.com/th?id=OIP.iFaOYyogDOVsrn7eMegcyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" height={50} width={50}></img></a>


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        // style={{ backgroundColor: "#dd4b39" }}
        style={{ width:70,height:75}}
        href="#!"
        role="button"
      ><img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" height={50} width={50}></img></a>


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        // style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      ><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" height={50} width={50}></img></a>


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        // style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      ><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" height={50} width={50}></img></a>


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        // style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      ><img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" height={50} width={50}></img></a>
      

    </section>
  </div>
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    ©  Copyright:
    <a className="text-body" href="#"> 2024 Task Manager & Reminder.com</a>
  </div>

</footer>
</>

    )
}
export default Footer