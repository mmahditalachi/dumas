"use client";

import React, { useState } from "react";
import "./TicTacToe.css";
import ButtonHero from "./ButtonHero";

export default function TicTacToe() {
  const [turn, setTurn] = useState<string>("X");
  const [cells, setCells] = useState<string[]>(Array(9).fill(""));
  const [winner, setWinner] = useState<string>();
  const [isDraw, setIsDraw] = useState(false);

  const checkwinner = (arr: string[]) => {
    let combos: { [id: string]: number[][] } = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          arr[pattern[0]] === "" ||
          arr[pattern[1]] === "" ||
          arr[pattern[2]] === ""
        ) {
        } else if (
          arr[pattern[0]] === arr[pattern[1]] &&
          arr[pattern[1]] === arr[pattern[2]]
        ) {
          setWinner(arr[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num: number) => {
    if (winner || cells[num] !== "") return;

    let arr = [...cells];
    if (turn === "X") {
      arr[num] = "X";
      setTurn("O");
    } else {
      arr[num] = "O";
      setTurn("X");
    }
    checkwinner(arr);
    setCells(arr);
    if (!arr.includes("") && !winner) {
      setIsDraw(true);
    }
  };

  const Cell = ({ num }: { num: number }) => {
    const cellValue = cells[num];
    const cellClassName = cellValue ? `cell cell-${cellValue}` : "cell";

    return (
      <td className={cellClassName} onClick={() => handleClick(num)}>
        {cellValue}
      </td>
    );
  };

  const handleReset = () => {
    setWinner("");
    setIsDraw(false);
    setCells(Array(9).fill(""));
  };

  return (
    <div className="container flex flex-col justify-around space-y-10">
      <div className={`winner ${winner || isDraw ? "show" : ""}`}>
        {winner ? `برنده: ${winner}` : isDraw ? "تساوی" : ""}
      </div>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <ButtonHero
        type="button"
        title="دوباره"
        onClick={handleReset}
        className="w-24 "
      />
    </div>
  );
}
