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
import iconBlue from "../../assets/icons/buy-blue.svg";
import iconWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
const Card = ({ pdt, setSelected, isSelected }) => {
  console.log(pdt)
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
          <Image boxSize={8} src={isSelected ? iconWhite : iconBlue} />
        </Flex>
        <Image src={pdt.img.url} />
        <Divider my={2} />
        <VStack align="stretch">
          <Text opacity="0.8">{pdt.category}</Text>
          <Text>{pdt.name}</Text>
        </VStack>
      </Stack>
      {isSelected && (
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
                <Text fontSize={'xl'} fontWeight='bold'>12000</Text>
                <Image src={coin} />
              </HStack>
              <Button>Redeem Now</Button>
            </Stack>
          </Stack>
        </Flex>
      )}
    </Box>
  );
};

export default Card;
