import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
const FILTERS = ["Most Recent", "Lowest Price", "Highest Price"];
const Filters = ({ activeFilter, onChange }) => {
  return (
    <Stack direction={{ base: "column", sm: "row" }} align='center' spacing={5}>
      <Text>Sort By</Text>
      {FILTERS.map((filter) => (
        <Box
          key={filter}
          bg={activeFilter === filter ? "cyan.200" : "gray.100"}
          p={2}
          borderRadius="20px"
          cursor="pointer"
          onClick={() => onChange(filter)}
        >
          {filter}
        </Box>
      ))}
    </Stack>
  );
};

export default Filters;
