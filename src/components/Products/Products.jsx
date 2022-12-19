import { Stack, Box, Center, Spinner, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Counter from "./Counter";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

const Products = () => {
  const [filter, setFilter] = useState("Most Recent");
  const { data, error, isLoading } = useFetch();
  return (
    <Box py={5} spacing="30px" mx="auto" w="80%">
      {isLoading && (
        <Center>
          <Spinner size="xl" my={10} />
        </Center>
      )}
      {!isLoading && !data && (
        <Center>
          <Heading color="red.500">{error}</Heading>
        </Center>
      )}
      {data && (
        <>
          <Stack spacing="40px" direction={"row"} alignItems="center">
            <Counter current={data?.length} total={data?.length} />
            <Filters activeFilter={filter} onChange={setFilter} />
          </Stack>
          <ProductGrid products={data} />
        </>
      )}
    </Box>
  );
};

export default Products;
