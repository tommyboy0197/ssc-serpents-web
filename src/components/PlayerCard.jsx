import React from "react";

import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider
} from "@chakra-ui/react";

export default function PlayerCard({img,player_name,role,rank,description,lessthanfive,mode}) {
    return (
        <Card key={player_name} width="200px" height="380px" mt="2.5vh" sx={{flex: 1}} style={{background: 'none'}}>
            <CardBody sx={{
                backgroundColor: mode === "light" ? "#fff" : "#303633",
                borderRadius: "0.375rem"
            }}>
                <Image src={img} alt={player_name} borderRadius="lg" width={lessthanfive ? "350px" : "200px"} height="150px"/>
                <Divider/>
                <Stack mt='6' spacing='3'>
                    <Heading size='md' sx={{
                        color: mode === "light" ? "#000" : "#A4BAB7"
                    }}>{player_name}</Heading>
                    <Divider/>
                    <Text sx={{
                        color: mode === "light" ? "#000" : "#A4BAB7"
                    }}>Role: {role}</Text>
                    <Divider/>
                    <Text sx={{
                        color: mode === "light" ? "#000" : "#A4BAB7"
                    }}>Rank: {rank}</Text>
                    <Divider/>
                    <Text sx={{
                        color: mode === "light" ? "#000" : "#A4BAB7"
                    }}>{description}</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}