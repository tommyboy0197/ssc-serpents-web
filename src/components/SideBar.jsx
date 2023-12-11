import React, {useState} from "react";

import { Button, Divider, Flex,IconButton } from "@chakra-ui/react";
import {MoonIcon,SunIcon} from "@chakra-ui/icons"
import {FiMenu,FiHome,FiUser,FiInfo,FiShoppingCart} from "react-icons/fi"

import NavItem from "./NavItem"

export default function SideBar({active,sx,mode,setMode}) {
    const [navSize,changeNavSize] = useState("large")

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow={mode === "light" ? "0 4px 12px 0 #D89A9E" : "0 4px 12px 0 #303633"}
            borderRadius={navSize === "small" ? "15px" : "30px"}
            width={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton background="none" mt="5" _hover={{background: 'none'}} icon={<FiMenu/>} color={"#79023D"} onClick={() => {
                    if(navSize === "small") {
                        changeNavSize("large")
                    } else changeNavSize("small")
                }}/>

                <a href="/"><NavItem navSize={navSize} icon={FiHome} title="Home" description="home page" active={active === "home"} mode={mode}/></a>
                <a href="https://esk.gg/collections/ssc-serpents"><NavItem navSize={navSize} icon={FiShoppingCart} description="ssc serpents merch" title="Merch" mode={mode}/></a>
                <a href="/about"><NavItem navSize={navSize} icon={FiInfo} description="about us" title="About" active={active === "about"} mode={mode}/></a>
                <a href="/players"><NavItem navSize={navSize} icon={FiUser} description="players" title="Players" active={active === "players"} mode={mode}/></a>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="center"
                mb={4}
            >
                <Flex>
                    <Button sx={{background: 'none'}} onClick={() => setMode(mode === "light" ? "dark" : "light")}>{mode === "light" ? <MoonIcon/> : <SunIcon/>}</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}