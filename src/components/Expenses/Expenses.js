import React, { useState } from "react";

import Card from "../UI/Card";

import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
