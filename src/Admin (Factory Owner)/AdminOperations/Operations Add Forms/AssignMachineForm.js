import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../../FirebaseConfig";

function AssignMachineForm({ setopeningAssignMachineForm }) {
  const [gettingMachines, setgettigMachines] = useState([]);
  const [gettingUsers, setgettingUsers] = useState([]);
  const [gettingProductionLines, setgettingProductionLines] = useState([]);
  const [selectedMachine, setselectedMachine] = useState("");
  const [selectedProductionLine, setselectedProductionLine] = useState("");
  const [selectedOperator, setselectedOperator] = useState("");
  const [department, setdepartment] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [dailyHoursAlloted, setdailyHoursAlloted] = useState("");

  async function renderingMachines() {
    const taskDetails = await getDocs(collection(database, "machine_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  async function renderingProductionLines() {
    const taskDetails = await getDocs(
      collection(database, "production_line_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingProductionLines(multipleArray);
  }

  async function renderingUser() {
    const taskDetails = await getDocs(collection(database, "user_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingUsers(multipleArray);
  }

  function AssignMachine() {
    const assignMachineData = {
      selectedMachine: selectedMachine,
      selectedOperator: selectedOperator,
      selectedProductionLine: selectedProductionLine,
      department: department,
      startDate: startDate,
      endDate: endDate,
      dailyHoursAlloted: dailyHoursAlloted,
    };

    try {
      addDoc(
        collection(database, "assign_machine_database"),
        assignMachineData
      );
      alert("Machine Assigned successfully!!!");
      setopeningAssignMachineForm(false);
    } catch {
      console.log("Something went wrong.");
    }
  }

  useEffect(() => {
    renderingMachines();
    renderingProductionLines();
    renderingUser();
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Assign Machine</p>
          <button
            onClick={() => {
              setopeningAssignMachineForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
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

            <div className="my-3">
              <p className=" text-[#d42041] text-lg font-semibold">
                Assignment Details
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Production Line
                  </p>
                  <select
                    onChange={(event) => {
                      setselectedProductionLine(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>Select Production Line</option>
                    {gettingProductionLines.map((machine) => (
                      <option value={machine.lineName} className="">
                        {machine.lineName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Operator / Staff
                  </p>
                  <select
                    onChange={(event) => {
                      setselectedOperator(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>Select Operator</option>
                    {gettingUsers
                      .filter(
                        (operator) => operator.role === "Machine Operator"
                      )
                      .map((machine) => (
                        <option value={machine.fullName} className="">
                          {machine.fullName}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Department
                  </p>
                  <input
                    onChange={(event) => {
                      setdepartment(event.target.value);
                    }}
                    placeholder="Packaging"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[#d42041] text-lg font-semibold">
              Assignment Duration
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Start Date</p>
                <input
                  type="date"
                  onChange={(event) => {
                    setstartDate(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">End Date</p>
                <input
                  type="date"
                  onChange={(event) => {
                    setendDate(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Daily Hours Alloted
                </p>
                <input
                  onChange={(event) => {
                    setdailyHoursAlloted(event.target.value);
                  }}
                  placeholder="8 Hours"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              AssignMachine();
            }}
            className="bg-[#d42041] py-1 px-4 text-white font-semibold"
          >
            Assign Machine
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignMachineForm;
