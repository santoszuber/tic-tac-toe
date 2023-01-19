import { Grid } from "@chakra-ui/react";
import { Square } from "./Square";

export function Board({ board, updateBoard }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={"7px"}>
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            updateBoard={() => {
              updateBoard(index);
            }}
          >
            {square}
          </Square>
        );
      })}
    </Grid>
  );
}
