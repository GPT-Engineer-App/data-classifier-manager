import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Center h="100vh">
      <VStack spacing={8}>
        <Heading>Welcome to my website!</Heading>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          Click me
        </Button>
      </VStack>
    </Center>
  );
};

export default Index;
