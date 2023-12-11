import React from "react";
import {Button} from "@chakra-ui/react"

export default function Home() {
    return (
        <div style={{paddingTop: "50px"}}>
            <h1 style={{marginTop: "2.5vh",
                marginLeft: "42.5vh",
                fontSize: "75px",
                fontWeight: "bold",color: '#1C6E8C'}}>Welcome To The</h1>
            <h1 style={{marginTop: "2.5vh",
                marginLeft: "30vh",
                fontSize: "125px",
                fontWeight: "bold",color: '#1C6E8C'}}>SSC SERPENTS</h1>
            <Button as="a" href="/about" sx={{marginLeft: "70vh",marginTop: '15px',backgroundColor: '#0d77db',textColor: 'black'}}>About us</Button>
        </div>
    )
}