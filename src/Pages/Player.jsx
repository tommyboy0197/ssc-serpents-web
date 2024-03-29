import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import data from "./data"

export default function Player() {
    document.getElementById("root").style.height = "100vh"
    const [playerdata,setplayerdata] = useState(null)
    const {playername} = useParams()
    const [margingLeftImg,setMarginLeftImg] = useState("0")
    const [mode] = useOutletContext()

    useEffect(() => {
        let playerdata = data.players.find(i => i.id === parseInt(playername))
        setplayerdata(playerdata)
    
        if(playerdata.id === 20) {
            setMarginLeftImg("20vw")
        } else if(playerdata.id === 4) {
            setMarginLeftImg("38.5vw")
        } else if(playerdata.id === 2) {
            setMarginLeftImg("28.5vw")
        } else if(playerdata.id === 1) {
            setMarginLeftImg("3.5vw")
        } else if(playerdata.id === 5) {
            setMarginLeftImg("20vw")
        } else if(playerdata.id === 6) {
            setMarginLeftImg("12vw")
        } else if(playerdata.id === 7) {
            setMarginLeftImg("34vw")
        } else if(playerdata.id === 8) {
            setMarginLeftImg("2.5vw")
        } else if(playerdata.id === 9) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 10) {
            setMarginLeftImg("21vw")
        } else if(playerdata.id === 11) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 12) {
            setMarginLeftImg("4vw")
        } else if(playerdata.id === 13) {
            setMarginLeftImg("5vw")
        } else if(playerdata.id === 14) {
            setMarginLeftImg("2.5vw")
        } else if(playerdata.id === 15) {
            setMarginLeftImg("5vw")
        } else if(playerdata.id === 16) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 17) {
            setMarginLeftImg("5vw")
        } else if(playerdata.id === 18) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 19) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 21) {
            setMarginLeftImg("5vw")
        } else if(playerdata.id === 22) {
            setMarginLeftImg("7vw")
        } else if(playerdata.id === 23) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 24) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 25) {
            setMarginLeftImg("5.5vw")
        }
    },[playername])

    if(!playerdata) {
        return (<><h1>Error finding player {playername}</h1></>)
    }

    return (
        <div style={{margin: 'auto', textAlign: 'center'}}>
            <h1 style={{fontSize: "100px",color: mode === "dark" ? '#FFE2FE' : 'black'}}>{playerdata.name}</h1>
            <img src={`/${playerdata.character}.jfif`} style={{marginLeft: margingLeftImg, border: `10px solid ${mode === "dark" ? '#FFE2FE' : 'black'}`, borderRadius: "15px"}} alt={playername}></img>
            <h1 style={{fontSize: '60px',color: mode === "dark" ? '#FFE2FE' : 'black'}}>Peak: {playerdata.peak}</h1>
            <h1 style={{fontSize: '20px',color: mode === "dark" ? '#FFE2FE' : 'black'}}>{playerdata.bio}</h1>
        </div>
    )
}