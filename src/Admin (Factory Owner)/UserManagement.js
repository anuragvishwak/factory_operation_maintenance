import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { database } from "../FirebaseConfig";


function UserManagement() {
  const [gettingUsers, setgettingUsers] = useState([]);

  async function renderingUser() {
    const taskDetails = await getDocs(collection(database, "user_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingUsers(multipleArray);
  }

  async function handleApprove(userId) {
    await updateDoc(doc(database, "user_database", userId), {
      status: "approved",
    });
    renderingUser();
  }

  async function handleReject(userId) {
    await updateDoc(doc(database, "user_database", userId), {
      status: "rejected",
    });
    renderingUser();
  }

  useEffect(() => {
    renderingUser();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />

      <div className="m-4 grid grid-cols-4 gap-4">
        {gettingUsers.map((user) => (
          <div className="border border-gray-300 bg-white p-4">
            <p className="text-[#2f323a] text-xl font-bold">{user.fullName}</p>
            <div className="flex items-center">
              <p className="text-sm text-[#d42041]">{user.email}</p>
              <span className="mx-1.5">|</span>
              <p className="text-sm text-[#d42041]">{user.phoneNumber}</p>
            </div>
            <p className="text-[#d42041]">
              Role:{" "}
              <span className="text-[#2f323a] font-semibold">{user.role}</span>
            </p>

            {user.status === "approved" ? (
              <p className="mt-4 text-green-600 font-bold text-right">
                Approved
              </p>
            ) : user.status === "rejected" ? (
              <p className="mt-4 text-red-600 font-bold text-right">Rejected</p>
            ) : (
              <div className="flex items-center mt-4 text-sm justify-end space-x-2">
                <button
                  onClick={() => handleApprove(user.id)}
                  className="bg-[#2f323a] text-white py-1 px-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(user.id)}
                  className="bg-[#d42041] text-white py-1 px-2"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserManagement;
