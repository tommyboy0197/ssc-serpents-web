import React from "react";
import { SimpleGrid,Text } from "@chakra-ui/react";
import PlayerCard from "../components/PlayerCard";
import { useOutletContext } from "react-router-dom";

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
                <PlayerCard img="/bastion.png" player_name="Leo" role="team captain" rank="Top 500" description="overwatch A dps" mode={mode}/>
                <PlayerCard img="/ashe.jfif" player_name="Max" role="player" rank="Masters" description="overwatch A dps" mode={mode}/>
                <PlayerCard img="/sigma.jfif" player_name="Alex" role="player" rank="Top 500" description="overwatch A tank" mode={mode}/>
                <PlayerCard img="/bap.jfif" player_name="Jack" role="player" rank="Grand Master" description="overwatch A support" mode={mode}/>
                <PlayerCard img="/ana.jfif" player_name="Cam" role="player" rank="Plat" description="overwatch A support" mode={mode}/>
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Overwatch B</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                <PlayerCard img="/moira.jfif" player_name="Izzy" role="team captain" rank="Plat 2" description="overwatch B support" mode={mode}/>
                <PlayerCard img="/lifeweaver.jfif" player_name="Tom" role="player" rank="gold 4" description="overwatch B support" mode={mode}/>
                <PlayerCard img="/ram.jfif" player_name="Dan" role="player" rank="Diamond 1" description="overwatch B tank" mode={mode}/>
                <PlayerCard img="/reaper.jfif" player_name="Josh" role="player" rank="Plat 3" description="overwatch B dps" mode={mode}/>
                <PlayerCard img="/soldier.jfif" player_name="Jamie" role="player" rank="Unranked" description="overwatch B dps" mode={mode}/>
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Overwatch C</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                <PlayerCard img="/orisa.jfif" player_name="Korey" role="team captain" rank="Gold 3" description="overwatch C tank" mode={mode}/>
                <PlayerCard img="/bastion.png" player_name="Blue" role="player" rank="Gold 5" description="overwatch A dps" mode={mode}/>
                <PlayerCard img="/junkrat.jfif" player_name="brooke" role="player" rank="Gold 5" description="overwatch A dps" mode={mode}/>
                <PlayerCard img="/kiriko.jfif" player_name="Ethan" role="player" rank="Gold 3" description="overwatch A support" mode={mode}/>
                <PlayerCard img="/zen.jfif" player_name="calum" role="player" rank="Silver 2" description="overwatch A support" mode={mode}/>
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Valorant A</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                <PlayerCard img="/killjoy.jfif" player_name="Tom" role="team captain" rank="Gold 1" description="Valorant A sentinal" mode={mode}/>
                <PlayerCard img="/breach.jfif" player_name="Claudia" role="player" rank="Silver 2" description="Valorant A initiator" mode={mode}/>
                <PlayerCard img="/brim.jfif" player_name="Vera" role="player" rank="Gold 2" description="Valorant A controller" mode={mode}/>
                <PlayerCard img="/reyna.jfif" player_name="Tyla" role="player" rank="Silver 3" description="Valorant A duelist" mode={mode}/>
                <PlayerCard img="/raze.jfif" player_name="Logan" role="player" rank="Bronze 3" description="Valorant A duelist" mode={mode}/>
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Valorant B</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                <PlayerCard img="/kayo.jfif" player_name="Alice" role="team captain" rank="Gold 3" description="Valorant B initiator" mode={mode}/>
                <PlayerCard img="/reyna.jfif" player_name="Luke" role="player" rank="Diamond 3" description="Valorant B Duelist" mode={mode}/>
                <PlayerCard img="/omen.jfif" player_name="Lewis" role="player" rank="Bronze 1" description="Valorant B controller" mode={mode}/>
                <PlayerCard img="/neon.jfif" player_name="Ella" role="player" rank="Unranked" description="Valorant B duelist" mode={mode}/>
                <PlayerCard img="/sage.jfif" player_name="James" role="player" rank="Unranked" description="Valorant B sentinal" mode={mode}/>
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Rocket League A</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                <PlayerCard img="/fennec.jfif" player_name="TY" role="team captain" rank="GC" description="rocket league A captain" lessthanfive={true} mode={mode}/>
                <PlayerCard img="/fennec.jfif" player_name="Philip" role="player" rank="SSL" description="rocket league A player" lessthanfive={true} mode={mode}/>
                <PlayerCard img="/fennec.jfif" player_name="Jay" role="player" rank="plat" description="rocket league A player" lessthanfive={true} mode={mode}/>
            </SimpleGrid>
            <Text sx={{
                marginTop: "2.5vh",
                marginLeft: "70vh",
                fontSize: "xl",
                fontWeight: "bold",
                color: mode === "light" ? "#000" : "#D89A9E"
            }}>Rocket League B</Text>
            <SimpleGrid colums={1} spacing={10} minChildWidth="300px" sx={{flex: 1, display: "flex"}}  ml="35px">
                <PlayerCard img="/octane.jfif" player_name="Rhys" role="team captain" rank="GC" description="rocket league B captain" lessthanfive={true} mode={mode}/>
                <PlayerCard img="/fennec.jfif" player_name="Taylor" role="player" rank="plat" description="rocket league B player" lessthanfive={true} mode={mode}/>
                <PlayerCard img="/fennec.jfif" player_name="Max" role="player" rank="plat" description="rocket league B player" lessthanfive={true} mode={mode}/>
            </SimpleGrid>
        </div>
    )
}