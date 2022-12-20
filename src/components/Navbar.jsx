import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import { useGlobalContext } from '../context/userContext'
const Navbar = () => {
  const { user } = useGlobalContext();

  return (
    <Flex boxShadow={"md"} p={5} justify="space-between">
      <Image src={logo} />
      <HStack spacing="20px">
        <Text fontWeight="bold" opacity={0.7}>
          {user?.name}
        </Text>
        <HStack p={2} borderRadius="lg" bg="gray.100">
          <Text opacity={0.9}>{user?.points}</Text>
          <Image src={coin} />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Navbar;
