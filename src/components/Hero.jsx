import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import header from "../assets/header-x2.png";
const Hero = () => {
  return (
    <Stack spacing={5}>
      <Flex w='100%' p={5} alignItems={'flex-end'} borderRadius='lg' backgroundSize='cover' justify='flex-start' bgImg={header}>
        <Heading color='white'>Electronics</Heading>
      </Flex>
    </Stack>
  );
};

export default Hero;
