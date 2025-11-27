import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../../../FirebaseConfig";

function AddExpenseForm({ setopeningAddExpense }) {
  const [selectedMachineArea, setselectedMachineArea] = useState("");
  const [gettingMachines, setgettigMachines] = useState([]);
  const [selectedMachine, setselectedMachine] = useState("");
  const [expenseCategory, setexpenseCategory] = useState("general_expenses");
  const [generalExpenseName, setgeneralExpenseName] = useState("");
  const [generalAmount, setgeneralAmount] = useState("");
  const [generalExpenseDate, setgeneralExpenseDate] = useState("");
  const [generalDescription, setgeneralDescription] = useState("");
  const [billType, setbillType] = useState("");
  const [billMonth, setbillMonth] = useState("");
  const [billAmount, setbillAmount] = useState("");
  const [billDueDate, setbillDueDate] = useState("");
  const [billPaymentStatus, setbillPaymentStatus] = useState("");
  const [areaName, setareaName] = useState("");
  const [maintenanceExpenseType, setmaintenanceExpenseType] = useState("");
  const [maintenanceAmount, setmaintenanceAmount] = useState("");
  const [maintenanceVendor, setmaintenanceVendor] = useState("");
  const [maintenanceInvoiceNumber, setmaintenanceInvoiceNumber] = useState("");
  const [maintenanceExpenseDate, setmaintenanceExpenseDate] = useState("");
  const [employeeName, setemployeeName] = useState("");
  const [travelDate, settravelDate] = useState("");
  const [purpose, setpurpose] = useState("");
  const [travelExpenseType, settravelExpenseType] = useState("");
  const [additionalExpenseName, setadditionalExpenseName] = useState("");
  const [additionalAmount, setadditionalAmount] = useState("");
  const [additionalNotes, setadditionalNotes] = useState("");

  async function renderingMachines() {
    const taskDetails = await getDocs(collection(database, "machine_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  function addExpense() {
    let finalExpenseData = {};

    if (expenseCategory === "general_expenses") {
      finalExpenseData = {
        expenseCategory,
        generalExpenseName,
        generalAmount,
        generalExpenseDate,
        generalDescription,
        createdAt: new Date().toISOString(),
      };
    }

    if (expenseCategory === "utility_bills") {
      finalExpenseData = {
        expenseCategory,
        billType,
        billMonth,
        billAmount,
        billDueDate,
        billPaymentStatus,
        createdAt: new Date().toISOString(),
      };
    }

    if (expenseCategory === "maintenance_expenses") {
      finalExpenseData = {
        expenseCategory,
        selectedMachineArea,
        selectedMachine,
        areaName,
        maintenanceExpenseType,
        maintenanceAmount,
        maintenanceVendor,
        maintenanceInvoiceNumber,
        maintenanceExpenseDate,
        createdAt: new Date().toISOString(),
      };
    }

    if (expenseCategory === "travel_reimbursement") {
      finalExpenseData = {
        expenseCategory,
        employeeName,
        travelDate,
        purpose,
        travelExpenseType,
        createdAt: new Date().toISOString(),
      };
    }

    if (expenseCategory === "additional_expenses") {
      finalExpenseData = {
        expenseCategory,
        additionalExpenseName,
        additionalAmount,
        additionalNotes,
        createdAt: new Date().toISOString(),
      };
    }

    try {
      addDoc(collection(database, "expense_management_database"), finalExpenseData);
      alert("Expense Added Successfully!");
      setopeningAddExpense(false);
    } catch (error) {
      alert("Error saving expense: " + error.message);
    }
  }

  useEffect(() => {
    renderingMachines();
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Expense</p>
          <button
            onClick={() => {
              setopeningAddExpense(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              expense Category
            </p>
            <select
              onChange={(event) => {
                setexpenseCategory(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Category</option>
              <option value={"general_expenses"}>General Expenses</option>
              <option value={"utility_bills"}>Utility Bills</option>
              <option value={"maintenance_expenses"}>
                Maintenance Expenses
              </option>
              <option value={"travel_reimbursement"}>
                Travel Reimbursement
              </option>
              <option value={"additional_expenses"}>Additional Expenses</option>
            </select>
          </div>

          {expenseCategory === "general_expenses" ? (
            <div>
              <div className="grid grid-cols-3 my-3 gap-4">
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Expense Name
                  </p>
                  <input
                    onChange={(event) => {
                      setgeneralExpenseName(event.target.value);
                    }}
                    placeholder="Press Machine"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Amount</p>
                  <input
                    onChange={(event) => {
                      setgeneralAmount(event.target.value);
                    }}
                    placeholder="3000/-"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Date</p>
                  <input
                    onChange={(event) => {
                      setgeneralExpenseDate(event.target.value);
                    }}
                    type="date"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Description</p>
                <textarea
                  onChange={(event) => {
                    setgeneralDescription(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          ) : expenseCategory === "utility_bills" ? (
            <div className="grid mt-3 grid-cols-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Bill Type</p>
                <input
                  onChange={(event) => {
                    setbillType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Bill Month</p>
                <input
                  onChange={(event) => {
                    setbillMonth(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Bill Amount</p>
                <input
                  onChange={(event) => {
                    setbillAmount(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Due Date</p>
                <input
                  onChange={(event) => {
                    setbillDueDate(event.target.value);
                  }}
                  type="date"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Payment Status
                </p>
                <input
                  onChange={(event) => {
                    setbillPaymentStatus(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          ) : expenseCategory === "maintenance_expenses" ? (
            <div className="grid grid-cols-3 mt-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Machine / Area
                </p>
                <select
                  onChange={(event) => {
                    setselectedMachineArea(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Type</option>
                  <option>Machine</option>
                  <option>Area</option>
                </select>
              </div>

              {selectedMachineArea === "Machine" ? (
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Machine</p>
                  <select
                    onChange={(event) => {
                      setselectedMachine(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>Select Machine</option>
                    {gettingMachines.map((machine) => (
                      <option value={machine.machineName} className="">
                        {machine.machineName}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Enter Area Name
                  </p>
                  <input
                    onChange={(event) => {
                      setareaName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              )}

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Expense Type
                </p>
                <input
                  onChange={(event) => {
                    setmaintenanceExpenseType(event.target.value);
                  }}
                  placeholder="8 Hours"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Amount</p>
                <input
                  onChange={(event) => {
                    setmaintenanceAmount(event.target.value);
                  }}
                  placeholder="8 Hours"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Vendor</p>
                <input
                  onChange={(event) => {
                    setmaintenanceVendor(event.target.value);
                  }}
                  placeholder="8 Hours"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Invoice Number
                </p>
                <input
                  onChange={(event) => {
                    setmaintenanceInvoiceNumber(event.target.value);
                  }}
                  placeholder="8 Hours"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Expense Date
                </p>
                <input
                  type="date"
                  onChange={(event) => {
                    setmaintenanceExpenseDate(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          ) : expenseCategory === "travel_reimbursement" ? (
            <div className="grid grid-cols-3 mt-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Employee Name
                </p>
                <input
                  type="date"
                  onChange={(event) => {
                    setemployeeName(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Travel Date</p>
                <input
                  type="date"
                  onChange={(event) => {
                    settravelDate(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Purpose</p>
                <input
                  onChange={(event) => {
                    setpurpose(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Expense Type
                </p>
                <select
                  onChange={(event) => {
                    settravelExpenseType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Type</option>
                  <option>Transport</option>
                  <option>Food</option>
                  <option>Stay</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-2 my-3 gap-4">
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Expense Name
                  </p>
                  <input
                    onChange={(event) => {
                      setadditionalExpenseName(event.target.value);
                    }}
                    placeholder="Stationeries"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Amount</p>
                  <input
                    onChange={(event) => {
                      setadditionalAmount(event.target.value);
                    }}
                    placeholder="300/-"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Notes</p>
                <textarea
                  onChange={(event) => {
                    setadditionalNotes(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addExpense();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpenseForm;
