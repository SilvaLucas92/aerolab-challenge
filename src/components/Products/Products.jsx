import { Stack, Box, Center, Spinner, Heading } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Counter from "./Counter";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

const Products = () => {
  const [filter, setFilter] = useState("Most Recent");
  const { data, error, isLoading } = useFetch();
  const filteredProducts = useMemo(() => {
    switch (filter) {
      case "Highest Price": {
        return [...data].sort((a, b) => b.cost - a.cost);
      }
      case "Lowest Price": {
        return [...data].sort((a, b) => a.cost - b.cost);
      }
      case "Most Recent":
      default: {
        return data;
      }
    }
  }, [data, filter]);
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
          <Stack
            spacing="40px"
            direction={{ base: "column", md: "row" }}
            alignItems="center"
          >
            <Counter
              current={filteredProducts?.length}
              total={filteredProducts?.length}
            />
            <Filters activeFilter={filter} onChange={setFilter} />
          </Stack>
          <ProductGrid products={filteredProducts} />
          <Counter
              current={filteredProducts?.length}
              total={filteredProducts?.length}
            />
        </>
      )}
    </Box>
  );
};

export default Products;
