import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { WINNERS } from "../constants";

export function WinnerDisplay({ winner, resetGame }) {
  return (
    <>
      {winner != WINNERS.none && (
        <Modal isOpen>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={"center"}>Game over!</ModalHeader>
            <ModalBody>
              {winner === WINNERS.X && "X Wins!"}
              {winner === WINNERS.O && "O Wins!"}
              {winner === WINNERS.tie && "It's a tie!"}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={resetGame}>
                Play again
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
