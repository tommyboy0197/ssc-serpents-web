import {Outlet} from "react-router-dom"
import NavBar from "../components/SideBar"
import { useState } from "react"

export default function RootLayout() {
    const [mode,setMode] = useState("dark")
    document.getElementById("root").style.backgroundColor = mode === "light" ? "#A4BAB7" : "#231F20"


    return (
        <div style={{display: "flex"}}>
            <NavBar mode={mode} setMode={setMode}/>
            <Outlet context={[mode]}/>
        </div>
    )
}