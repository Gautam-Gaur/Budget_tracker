import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES=[
  {id:"e0",title:"iphone",amount:1000,date:new Date()},
  {id:"e1",title:"samsung",amount:400,date:new Date()},
  {id:"e2",title:"one+",amount:600,date:new Date()},
  {id:"e3",title:"pixel",amount:900,date:new Date()}
];
function App() {
const [expenses, setExpenses]=useState(DUMMY_EXPENSES);

const addExpenseHanler = (expense) =>{
  setExpenses((prevExpenses) =>{
   return [expense, ...prevExpenses ];
  });
}; 
  return (
  <>
  <NewExpense onAddExpense={addExpenseHanler} />
  <Expenses items={expenses}/>
  </>
  );
}

export default App;
