import React from "react";
import { Select, Flex } from "@chakra-ui/react";

function Filter({}) {
  return (
    <Flex justifyContent="center" alignItems="flex-start">
      {" "}
      <Select w="20%" mr={2} color="gray.300" placeholder="Sort">
        <option value="option1">Cost: Lowest to highest</option>
        <option value="option2">Cost: highest to Lowest</option>
      </Select>
      <Select w="20%" mr={2} color="gray.300" placeholder="Categories">
        <option value="option1">Action</option>
        <option value="option2">Adventure</option>
        <option value="option3">RPG</option>
        <option value="option4">Racing</option>
        <option value="option5">Horror</option>
        <option value="option6">Platformer</option>
        <option value="option15">Indie</option>
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

export default Filter;

// import React from "react";
// import { Select } from "@chakra-ui/react";

// function Filter({ sort, categories, onSelectFilter, onSelectCategory }) {
//   return (
//     <>
//       <Filter
//         sort={[
//           { value: "option1", label: "Option 1" },
//           { value: "option2", label: "Option 2" },
//           { value: "option3", label: "Option 3" },
//         ]}
//         categories={[
//           { value: "category1", label: "Category 1" },
//           { value: "category2", label: "Category 2" },
//           { value: "category3", label: "Category 3" },
//         ]}
//         onSelectFilter={(value) => console.log("Selected filter:", value)}
//         onSelectCategory={(value) => console.log("Selected category:", value)}
//       />

//       <Select
//         placeholder="Sort by"
//         onChange={(e) => onSelectFilter(e.target.value)}
//       >
//         {sort.map((sort) => (
//           <option key={sort.value} value={sort.value}>
//             {sort.label}
//           </option>
//         ))}
//       </Select>
//       <Select
//         placeholder="Categories"
//         onChange={(e) => onSelectCategory(e.target.value)}
//       >
//         {categories.map((category) => (
//           <option key={category.value} value={category.value}>
//             {category.label}
//           </option>
//         ))}
//       </Select>
//     </>
//   );
// }

// export default Filter;
