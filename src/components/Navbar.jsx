import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'
import { useState, useEffect } from "react";
const Navbar = () => {
    const [user, setUser] = useState(null);
    const url = "https://coding-challenge-api.aerolab.co/user/me";
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljOWMxNjU2NDAxYTAwMjEwZjdjNDgiLCJpYXQiOjE2NzEyMDc5NTh9.w6gcLbKyxHgMraak-eFBfQSHDXEOHf_o13C2Nk-wcI8";
    useEffect(() => {
      fetch(url, {
        headers: {
          Authorization: TOKEN,
        },
      })
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
        })
    }, [url]);
    return(
        <Flex boxShadow={'md'} p={5} justify='space-between'>
            <Image src={logo} />
            <HStack spacing='20px'>
                <Text fontWeight='bold' opacity={0.7}>{user?.name}</Text>
                <HStack p={2} borderRadius='lg' bg='gray.100'>
                    <Text opacity={0.9}>{user?.points}</Text>
                    <Image src={coin} />
                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar;