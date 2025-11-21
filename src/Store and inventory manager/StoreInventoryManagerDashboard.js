import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../FirebaseConfig";
import StoreInventoryNavbar from "./StoreInventoryNavbar";

function StoreInventoryManagerDashboard() {
  const currentUser = localStorage.getItem("email");
  const [gettingUsers, setgettingUsers] = useState([]);

  async function renderingUser() {
    const taskDetails = await getDocs(collection(database, "user_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingUsers(multipleArray);
  }

  useEffect(() => {
    renderingUser();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <StoreInventoryNavbar />
      <div>
        <div className="bg-white p-4 border border-gray-300 m-4">
          <p className="text-xl font-bold text-[#2f323a]">
            Welcome Store Inventory
          </p>
          <p className="text-[#d42041] font-semibold">
            {gettingUsers
              .filter((user) => user.email === currentUser)
              .map((user) => user.fullName)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoreInventoryManagerDashboard;
