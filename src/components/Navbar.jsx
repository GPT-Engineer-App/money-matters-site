import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/markets">Markets</NavLink>
          <NavLink to="/world">World</NavLink>
          <NavLink to="/opinion">Opinion</NavLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;