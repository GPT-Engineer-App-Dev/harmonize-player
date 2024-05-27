import { Box, Container, VStack, Text, Flex, Heading, Image, Link, HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.900" color="white" py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            MusicStream
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/browse" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Browse
            </Link>
            <Link as={RouterLink} to="/library" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Library
            </Link>
            <Link as={RouterLink} to="/create-playlist" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Create Playlist
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="center">
          <Heading as="h2" size="xl">
            Featured Playlist
          </Heading>
          <Image src="/images/featured-playlist.jpg" alt="Featured Playlist" borderRadius="md" />
          <Text fontSize="lg" textAlign="center" maxW="container.md">
            Discover the latest hits and trending music in our featured playlist. Updated weekly to bring you the freshest tracks.
          </Text>
          <Button as={RouterLink} to="/create-playlist" colorScheme="blue">
            Create Playlist
          </Button>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={8} px={8}>
        <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
          <Text>&copy; {new Date().getFullYear()} MusicStream. All rights reserved.</Text>
          <HStack spacing={8} mt={{ base: 4, md: 0 }}>
            <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>
              About
            </Link>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;