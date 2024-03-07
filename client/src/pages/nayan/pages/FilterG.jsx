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
        <option value="Console">console</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Mouse">Mouse</option>
        <option value="Headphones">Headphones</option>
        <option value="Controllers">Controller</option>
        <option value="Miscellaneous">Miscellaneous</option>
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
