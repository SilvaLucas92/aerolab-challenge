import { Text } from "@chakra-ui/react";

const Counter = ({ current, total }) => {
  return <Text>{current} of {total} Products</Text>;
};

export default Counter;
