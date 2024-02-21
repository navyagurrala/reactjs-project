import Footer from "../routing/footer"
import PreNavbar from "./prenavbar"



const Prehomescreen=()=>{
    return(
        <>
        <PreNavbar/>
        <div style={{ position: "relative" }}>
                <img src="https://th.bing.com/th/id/R.6a57b859632a9d635c9da40cc673a2ed?rik=1sAh06jAZP4YeQ&riu=http%3a%2f%2fil8.picdn.net%2fshutterstock%2fvideos%2f19315681%2fthumb%2f1.jpg&ehk=eLH9LUcczWfVCL01H12LCwobUzr1cvOz6GECpPYwudE%3d&risl=&pid=ImgRaw&r=0" style={{ width: "100%", height: "60%" }}></img>
                <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "black", fontSize: "4rem",fontFamily: "Arial, sans-serif" ,fontStyle:"italic" }}>
                  <b> <p>TASK MANAGER & REMINDER</p></b>
                </div>
            </div>
        {/* <img src="https://th.bing.com/th/id/R.6a57b859632a9d635c9da40cc673a2ed?rik=1sAh06jAZP4YeQ&riu=http%3a%2f%2fil8.picdn.net%2fshutterstock%2fvideos%2f19315681%2fthumb%2f1.jpg&ehk=eLH9LUcczWfVCL01H12LCwobUzr1cvOz6GECpPYwudE%3d&risl=&pid=ImgRaw&r=0" style={{width:"100%",height:"60%"}}></img> */}
        <Footer/>
        </>
    )
}

export default Prehomescreen