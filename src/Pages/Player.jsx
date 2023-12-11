import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data"

export default function Player() {
    const [playerdata,setplayerdata] = useState(null)
    const {playername} = useParams()
    const [margingLeftImg,setMarginLeftImg] = useState("0")

    useEffect(() => {
        let playerdata = data.players.find(i => i.id === parseInt(playername))
        setplayerdata(playerdata)
    
        if(playerdata.id === 20) {
            setMarginLeftImg("22.5vw")
        } else if(playerdata.id === 4) {
            setMarginLeftImg("10vw")
        } else if(playerdata.id === 2) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 1) {
            setMarginLeftImg("3.5vw")
        } else if(playerdata.id === 5) {
            setMarginLeftImg("24.5vw")
        } else if(playerdata.id === 6) {
            setMarginLeftImg("15vw")
        } else if(playerdata.id === 7) {
            setMarginLeftImg("7.5vw")
        } else if(playerdata.id === 8) {
            setMarginLeftImg("2.5vw")
        } else if(playerdata.id === 9) {
            setMarginLeftImg("5.5vw")
        } else if(playerdata.id === 10) {
            setMarginLeftImg("27vw")
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
    })

    if(!playerdata) {
        return (<><h1>Error finding player {playername}</h1></>)
    }

    return (
        <div style={{margin: 'auto', textAlign: 'center'}}>
            <h1 style={{fontSize: "100px",color: '#1C6E8C',"text-shadow": "-1px -1px 0 #211A1E, 1px -1px 0 #211A1E, -1px 1px 0 #211A1E, 1px 1px 0 #211A1E"}}>{playerdata.name}</h1>
            <img src={`/${playerdata.character}.jfif`} style={{border: '10px solid #1C6E8C',borderRadius: "15px",marginLeft: margingLeftImg}}></img>
            <h1 style={{fontSize: '60px', color: '#1C6E8C',"text-shadow": "-1px -1px 0 #211A1E, 1px -1px 0 #211A1E, -1px 1px 0 #211A1E, 1px 1px 0 #211A1E"}}>Peak: {playerdata.peak}</h1>
            <h1 style={{color: '#1C6E8C',fontSize: '20px',"text-shadow": "-1px -1px 0 #404E4D, 1px -1px 0 #404E4D, -1px 1px 0 #404E4D, 1px 1px 0 #404E4D"}}>{playerdata.bio}</h1>
        </div>
    )
}