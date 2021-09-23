import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";

import Transaction from "./Transaction";

const TransactionList = () => {
  // const context = useContext(GlobalContext);
  const { transactions, getTransaction } = useContext(GlobalContext);

  useEffect(() => {
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
