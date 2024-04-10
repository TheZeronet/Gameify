import React from "react";
import { Select, Flex } from "@chakra-ui/react";

function FilterG({ setSort, setCategory, setPriceRange }) {
  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <Select
        w="20%"
        mr={2}
        color="gray.300"
        placeholder="Categories"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Action, Adventure">Action & Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Racing">Racing</option>
        <option value="Horror">Horror</option>
        <option value="Indie">Indie</option>
      </Select>
      <Select
        w="20%"
        mr={2}
        color="gray.300"
        placeholder="Price-Range"
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="1000">Less than 1000</option>
        <option value="2500">less than 2000</option>
        <option value="3000">less than 3000</option>
        <option value="3001">more than 3000</option>
      </Select>
    </Flex>
  );
}

export default FilterG;
