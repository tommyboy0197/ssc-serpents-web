import React from "react";

import { Flex,Text,Icon,Link,Menu,MenuButton,MenuList } from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox"

export default function NavItem({navSize,title,icon,active,description,mode}) {
    let linkbgc;
    if(active && mode === "light") {
        linkbgc = "#274D54"
    } else if(active && mode === "dark") {
        linkbgc = "#A4BAB7"
    }
    return (
        <Flex mt={30} flexDir="column" w='100%' alignItems={navSize === "small" ? "center" : "flex-start"}>
            <Menu placement="right">
                <Link
                    backgroundColor={ active && linkbgc}
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor: 'none',backgroundColor: linkbgc}}
                    width={navSize === "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={"#79023D"}/>
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"} color={mode === "light" ? "gray.800" : "#A4BAB7"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border='none'
                    w={200}
                    h={200}
                    ml={5}
                    background="none"
                >
                    <NavHoverBox title={title} icon={icon} description={description} mode={mode}/>
                </MenuList>
            </Menu>
        </Flex>
    )
}