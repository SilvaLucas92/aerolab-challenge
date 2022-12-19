import {
  Box,
  Grid,
  Text,
  Image,
  VStack,
  Divider,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Card from "./Card";
const ProductGrid = ({ products }) => {
  const [selected, setSelected] = useState(null);
  console.log(selected)
  return (
    <Grid my={5} templateColumns="repeat(4, 1fr)" gap={6}>
      {products?.map((pdt) => (
        <Card setSelected={setSelected} isSelected={pdt._id === selected} pdt={pdt} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
