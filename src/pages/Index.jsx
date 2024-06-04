import { Container, Text, VStack, Box, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Latest News Article 1</Text>
              <Text mt={4}>Summary of the latest news article 1...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Latest News Article 2</Text>
              <Text mt={4}>Summary of the latest news article 2...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Latest News Article 3</Text>
              <Text mt={4}>Summary of the latest news article 3...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Market Data</Text>
              <Text mt={4}>Market data will be displayed here...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Trending Topics</Text>
              <Text mt={4}>Trending topics will be displayed here...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;