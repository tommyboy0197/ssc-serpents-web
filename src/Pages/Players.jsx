import React, { useEffect } from "react";
import { Divider, SimpleGrid,Text } from "@chakra-ui/react";
import PlayerCard from "../components/PlayerCard";
import { useOutletContext } from "react-router-dom";
import data from "./data"

export default function Players() {
    const [mode] = useOutletContext()

    return (
        <div style={{paddingLeft: "50px"}}>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Overwatch A</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Overwatch A").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={false}/>
                ))}
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Overwatch B</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Overwatch B").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={false}/>
                ))}
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Overwatch C</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Overwatch C").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={false}/>
                ))}
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Valorant A</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Valorant A").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={false}/>
                ))}
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Valorant B</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Valorant B").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={false}/>
                ))}
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Rocket League A</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Rocket League A").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={true}/>
                ))}
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Rocket League B</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                {data.players.filter(i => i.team === "Rocket League B").map((item) => (
                    <PlayerCard img={`/${item.character}.jfif`} player_name={item.name} role={item.role} rank={item.peak} team={item.team} id={item.id} mode={mode} lessthanfive={true}/>
                ))}
            </SimpleGrid>
        </div>
    )
}