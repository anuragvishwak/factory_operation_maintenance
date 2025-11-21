import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function Login() {
  const navigation = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gettingUsers, setgettingUsers] = useState([]);

  async function renderingUser() {
    const taskDetails = await getDocs(collection(database, "user_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingUsers(multipleArray);
  }

  async function signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const q = query(
        collection(database, "user_database"),
        where("email", "==", email)
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("User record not found");
        return;
      }

      const userData = snapshot.docs[0].data();
      const role = userData.role;
      const status = userData.status || "pending";

      console.log("Login user:", userData);

      if (status === "rejected") {
        alert("Your registration has been rejected by the Admin.");
        return;
      }

      if (status === "pending") {
        alert("⏳ Your registration is pending Admin approval.");
        return;
      }

      if (status !== "approved") {
        alert("⚠ Invalid status. Contact admin.");
        return;
      }

      localStorage.setItem("email", email);

      switch (role) {
        case "Maintenance Engineer":
          navigation("/MaintenanceEngineerDashboard");
          break;

        case "Safety Officer":
          navigation("/SafetyOfficerDashboard");
          break;

        case "Machine Operator":
          navigation("/MachineOperatorDashboard");
          break;

        case "Quality Engineer":
          navigation("/QualityEngineerDashboard");
          break;

        case "Admin":
          navigation("/AdminDashboard");
          break;

        case "Supplier / Contractor":
          navigation("/SupplierContractManagementDashboard");
          break;

        case "Inventory / Store Manager":
          navigation("/StoreInventoryManagerDashboard");
          break;

        default:
          alert("Unknown role. Contact admin.");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    renderingUser();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="flex border shadow-lg p-5 bg-white border-gray-300 flex-col">
        <div className="">
          <p className="text-xl text-[#2f323a] font-bold">SignIn</p>
          <p className="text-[#d42041]">Enter your details to login.</p>
        </div>
        <div className="grid grid-cols-2 mb-2 mt-10 gap-5">
          <div>
            <p className="text-[#2f323a] mb-1 font-semibold">Email</p>
            <input
              type="email"
              onChange={(event) => {
                setemail(event.target.value);
              }}
              className="border border-gray-300 p-1.5 rounded w-96"
            />
          </div>
          <div className="">
            <p className="text-[#2f323a] mb-1 font-semibold">Password</p>
            <input
              type="password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              className="border border-gray-300 p-1.5 rounded w-96"
            />
          </div>
        </div>
        <div className="flex items-center mb-10 justify-between">
          <div className="flex items-center justify-end space-x-1">
            <p className="text-[#2f323a]">Don't have an account ?</p>
            <button
              onClick={() => {
                navigation("/SignUp");
              }}
              className="font-bold text-[#d42041]"
            >
              Sign Up
            </button>
          </div>
          <button className="font-semibold [#d42041]">forgot password ?</button>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              signIn();
            }}
            className="bg-[#d42041] text-white py-2 w-40"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
