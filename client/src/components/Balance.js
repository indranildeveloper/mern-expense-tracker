import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);

  const total = amounts
    .reduce((prevAmount, curAmount) => (prevAmount += curAmount), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">$ {numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
