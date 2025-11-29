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

      <div className="grid grid-cols-3 gap-4">
        {gettingExpenses.map((expense) => (
          <div>
            {expense.expenseCategory === "general_expenses" ? (
              <div></div>
            ) : (
              <div>
                <div className="border bg-white border-gray-300 mt-4">
                  <div className="bg-[#2f323a] p-4">
                    <div className="flex items-start justify-between">
                      <p className="text-white text-xl font-bold">
                        {expense.billType}
                      </p>
                      <p className="bg-white text-sm text-[#2f323a] py-1 px-3 rounded-full font-semibold">
                        {expense.billPaymentStatus}
                      </p>
                    </div>
                    <p className="text-[#d42041]">{expense.billMonth}</p>
                  </div>

                  <div className="border-t-8 border-[#d42041] p-4">
                    <div className="border border-gray-300 p-3">
                      <p className="text-[#2f323a]">Bill Amount</p>
                      <p className="text-[#d42041] font-semibold">
                        {expense.billAmount}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="border border-gray-300 p-3">
                        <p className="text-[#2f323a]">Due Date</p>
                        <p className="text-[#d42041] font-semibold">
                          {expense.billDueDate}
                        </p>
                      </div>

                      <div className="border border-gray-300 p-3">
                        <p className="text-[#2f323a]">Expense Category</p>
                        <p className="text-[#d42041] font-semibold">
                          {expense.expenseCategory === "utility_bills"
                            ? "Utility Bills"
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {openingAddExpense && (
        <AddExpenseForm setopeningAddExpense={setopeningAddExpense} />
      )}
    </div>
  );
}

export default ExpenseManagement;
