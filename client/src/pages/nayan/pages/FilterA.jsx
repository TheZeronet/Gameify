import React from "react";
import { Select, Flex } from "@chakra-ui/react";

function FilterA({}) {
  return (
    <Flex justifyContent="center" alignItems="flex-start">
      {" "}
      <Select w="20%" mr={2} color="gray.300" placeholder="Sort">
        <option value="option1">Cost: Lowest to highest</option>
        <option value="option2">Cost: highest to Lowest</option>
      </Select>
      <Select w="20%" mr={2} color="gray.300" placeholder="Categories">
        <option value="option1">console</option>
        <option value="option2">Keyboard</option>
        <option value="option3">Mouse</option>
        <option value="option4">Headphones</option>
        <option value="option5">Controller</option>
        <option value="option6">Miscellaneous</option>
      </Select>
      <Select w="20%" mr={2} color="gray.300" placeholder="Price-Range">
        <option value="option1">Less than 1000</option>
        <option value="option2">less than 2000</option>
        <option value="option3">less than 3000</option>
        <option value="option3">more than 3000</option>
      </Select>
    </Flex>
  );
}

export default FilterA;
