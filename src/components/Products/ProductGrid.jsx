import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./Card";
const ProductGrid = ({ products }) => {
  const [selected, setSelected] = useState(null);
  return (
    <Grid my={5} templateColumns={{base:'repeat(2, 1fr)', md:'repeat(4, 1fr)'}} gap={6}>
      {products?.map((pdt, i) => (
        <Card
          key={i}
          setSelected={setSelected}
          isSelected={pdt._id === selected}
          pdt={pdt}
        />
      ))}
    </Grid>
  );
};

export default ProductGrid;
