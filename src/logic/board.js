import { WINNER_COMBOS, WINNERS } from "../constants";

export function checkWin(newBoard) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return WINNERS[newBoard[a]];
    }
  }
  if (newBoard.every((square) => square != null)) {
    return WINNERS.tie;
  }
  return WINNERS.none;
}
