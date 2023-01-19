import { useState } from "react";
import { VStack, Text } from "@chakra-ui/react";
import { Board } from "./components/Board";
import { TurnsDisplay } from "./components/TurnsDisplay";
import { WinnerDisplay } from "./components/WinnerDisplay";
import { TURNS, WINNERS } from "./constants";
import { checkWin } from "./logic/board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(WINNERS.none);

  function resetGame() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    winner, setWinner(WINNERS.none);
  }

  function updateBoard(index) {
    if (board[index] || winner != WINNERS.none) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWin(newBoard);
    if (newWinner != WINNERS.none) {
      setWinner(newWinner);
    }
  }

  return (
    <>
      <VStack
        h={"100vh"}
        justifyContent="center"
        alignItems={"center"}
        gap="70px"
      >
        <Text fontSize={"xxx-large"} textAlign="center">
          Tic Tac Toe
        </Text>
        <Board board={board} updateBoard={updateBoard} />
        <TurnsDisplay turn={turn} TURNS={TURNS} />
        <WinnerDisplay winner={winner} resetGame={resetGame} />
      </VStack>
    </>
  );
}

export default App;
