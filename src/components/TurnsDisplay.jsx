import { Card, CardBody, HStack } from "@chakra-ui/react";

export function TurnsDisplay({ turn, TURNS }) {
  return (
    <HStack h="64px" w="100px">
      <Card
        borderRadius={7}
        variant={turn == TURNS.X ? "elevated" : "outline"}
        bgColor={turn == TURNS.X ? "#579BB1" : "transparent"}
        color={turn == TURNS.X ? "white" : "black"}
      >
        <CardBody borderRadius={7}>X</CardBody>
      </Card>
      <Card borderRadius={7}>
        <CardBody
          borderRadius={7}
          variant={turn == TURNS.O ? "elevated" : "outline"}
          bgColor={turn == TURNS.O ? "#579BB1" : "transparent"}
          color={turn == TURNS.O ? "white" : "black"}
        >
          O
        </CardBody>
      </Card>
    </HStack>
  );
}
