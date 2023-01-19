import { VStack, Text, Card, CardBody, Flex } from "@chakra-ui/react";

export function Square({ updateBoard, children }) {
  return (
    <VStack>
      <Card
        boxSize={["100px", "170px"]}
        bgColor="#579BB1"
        cursor={"pointer"}
        onClick={updateBoard}
      >
        <CardBody>
          <Flex justifyContent={"center"} alignItems="center" h="100%" w="100%">
            <Text color={"#F8F4EA"} fontWeight="bold" fontSize={"xxx-large"}>
              {children}
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </VStack>
  );
}
