import React from "react";
import {Button} from "@chakra-ui/react"

export default function Home() {
    document.getElementById("root").style.height = "100vh"
    return (
        <div style={{margin: 'auto', textAlign: 'center'}}>
            <h1 style={{marginTop: "2.5vh",
                fontSize: "75px",
                fontWeight: "bold",color: '#1C6E8C'}}>Welcome To The</h1>
            <h1 style={{marginTop: "2.5vh",
                fontSize: "125px",
                fontWeight: "bold",color: '#1C6E8C'}}>SSC SERPENTS</h1>
            <Button as="a" href="/about" sx={{marginTop: '15px',backgroundColor: '#0d77db',textColor: 'black'}}>About us</Button>
        </div>
    )
}