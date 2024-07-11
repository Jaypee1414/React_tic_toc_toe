import { WINNING_COMBINATIONS } from "./Winning_Combination";
export function derivedWinner(GameBoardUpdate, playerName){
    let winner;
    //step by step check for winning combination
    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = GameBoardUpdate[combination[0].row][combination[0].column]
        const secondSquareSymbol = GameBoardUpdate[combination[1].row][combination[1].column]
        const thirdSquareSymbol = GameBoardUpdate[combination[2].row][combination[2].column]

        if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
            winner = playerName[firstSquareSymbol];
        }
    }
    return winner;
}