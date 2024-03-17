import TaskForm from "./addtask"
import Postnavbar from "./postnavbar"

const Posthomescreen = ({ addTask }) => {
    return (
        <div style={{
            width: "100%",
            height: "700px",
            backgroundImage: "url('https://th.bing.com/th/id/R.6ce6828ad516e68664ca8db83c82f7c3?rik=dXIl6aLeVKrLag&riu=http%3a%2f%2fwallpaperswide.com%2fdownload%2frainbow_colors_8-wallpaper-1366x768.jpg&ehk=dVKgYJD6psLKiX7H9sKFLgbaR%2fYGtGXnjpQ1XUIjeGQ%3d&risl=&pid=ImgRaw&r=0')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>

            <h1 style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Times New Roman, serif",
                textShadow: "2px 2px 2px black, 0 0 25px blue, 0 0 5px blue"
            }}>TASK MANAGER & REMINDER</h1>
            <TaskForm addTask={addTask} />
        </div>
    )
}
export default Posthomescreen
