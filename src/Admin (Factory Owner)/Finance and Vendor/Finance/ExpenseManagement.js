import React, { useEffect, useState } from "react";
import AddExpenseForm from "./FinanceForms/AddExpenseForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";

function ExpenseManagement() {
  const [openingAddExpense, setopeningAddExpense] = useState(false);
  const [gettingExpenses, setgettingExpenses] = useState([]);

  async function renderingExpenses() {
    const taskDetails = await getDocs(
      collection(database, "expense_management_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingExpenses(multipleArray);
  }

  useEffect(() => {
    renderingExpenses();
  }, []);

  return (
    <div>
      <div className="bg-white border p-4 border-gray-300 flex items-center justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">Expense Management</p>
          <p className="text-[#d42041]">
            Add and manage all expenses from one centralized system.
          </p>
        </div>
        <button
          onClick={() => {
            setopeningAddExpense(true);
          }}
          className="bg-[#d42041] py-1 px-4 text-white font-semibold"
        >
          Add Expense
        </button>
      </div>

      <div>{gettingExpenses.map((expense)=>(
        <div>{}</div>
      ))}</div>
      {openingAddExpense && (
        <AddExpenseForm setopeningAddExpense={setopeningAddExpense} />
      )}
    </div>
  );
}

export default ExpenseManagement;
