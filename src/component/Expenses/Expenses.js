import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [curYear, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const yearFilter = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === curYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={curYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses ={yearFilter}/>
        <ExpensesList items={yearFilter} />
      </Card>
    </li>
  );
};
export default Expenses;
