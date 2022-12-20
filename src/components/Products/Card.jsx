import {
  Box,
  Text,
  Image,
  VStack,
  Divider,
  Flex,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import iconBlue from "../../assets/icons/buy-blue.svg";
import iconWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
import { useGlobalContext } from '../../context/userContext';

const Card = ({ pdt, setSelected, isSelected }) => {
  const { user, handlePoints } = useGlobalContext();
  const canBuy = useMemo(() => {
    return user.points >= pdt.cost
  }, [user, pdt])
  return (
    <Box position="relative">
      <Stack
        p={5}
        borderRadius={"md"}
        boxShadow="lg"
        key={pdt.name}
        onClick={() => setSelected(pdt._id)}
        h="100%"
        w="100%"
      >
        <Flex justify="end" pb={1}>
          {!canBuy ? (
            <HStack p={2} borderRadius='20px' bg="gray.500">
              <Text color='white' opacity={0.9}>You need {pdt?.cost - user?.points}</Text>
              <Image src={coin} />
            </HStack>
          ) : (
            <Image boxSize={8} src={iconBlue} />
          )}
        </Flex>
        <Image src={pdt.img.url} />
        <Divider my={2} />
        <VStack align="stretch">
          <Text opacity="0.8">{pdt.category}</Text>
          <Text>{pdt.name}</Text>
        </VStack>
      </Stack>
      {isSelected && canBuy && (
        <Flex
          position="absolute"
          h="100%"
          w="100%"
          bg="cyan.300"
          opacity={0.9}
          borderRadius={"md"}
          alignItems="center"
          zIndex={2}
          top={0}
          left={0}
          boxShadow="2xl"
        >
          <Stack
            p={4}
            position="absolute"
            top={0}
            left={0}
            borderRadius={"md"}
            key={pdt.name}
            onClick={() => setSelected("")}
            h="100%"
            w="100%"
          >
            <Flex justify="end">
              <Image boxSize={10} src={iconWhite} />
            </Flex>
            <Stack h="100%" w="100%" justify="center" align="center">
              <HStack>
                <Text fontSize={"xl"} fontWeight="bold">
                  {pdt?.cost}
                </Text>
                <Image src={coin} />
              </HStack>
              <Button onClick={() => handlePoints(pdt.cost)}>Redeem Now</Button>
            </Stack>
          </Stack>
        </Flex>
      )}
    </Box>
  );
};

export default Card;
