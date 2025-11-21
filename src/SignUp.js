import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, database } from "./FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [role, setrole] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function creatingUser() {
    const userData = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      role: role,
      email: email,
      password: password,
    };

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      addDoc(collection(database, "user_database"), userData);
      alert("User created successfully!!!");
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="flex border shadow-lg p-5 bg-white border-gray-300 flex-col">
        <div className="">
          <p className="text-xl text-[#2f323a] font-bold">Sign Up</p>
          <p className="text-[#d42041]">
            Enter your details to create your account.
          </p>
        </div>

        <div className="grid grid-cols-2 my-10 gap-5">
          <div>
            <p className="text-[#2f323a] mb-1 font-semibold">Full Name</p>
            <input
              type="text"
              onChange={(event) => {
                setfullName(event.target.value);
              }}
              placeholder="Anurag Vishwakarma"
              className="border border-gray-300 p-1.5 w-96"
            />
          </div>
          <div>
            <p className="text-[#2f323a] mb-1 font-semibold">Phone</p>
            <input
              type="text"
              onChange={(event) => {
                setphoneNumber(event.target.value);
              }}
              placeholder="+91"
              className="border border-gray-300 p-1.5 w-96"
            />
          </div>

          <div>
            <p className="text-[#2f323a] mb-1 font-semibold">Role</p>
            <select
              onChange={(event) => {
                setrole(event.target.value);
              }}
              className="border border-gray-300 p-1.5 w-96"
            >
              <option>select role</option>
              <option>Maintenance Engineer</option>
              <option>Machine Operator</option>
              <option>Inventory / Store Manager</option>
              <option>Quality Engineer</option>
              <option>Safety Officer</option>
              <option>Supplier / Contractor</option>
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] mb-1 font-semibold">Email</p>
            <input
              type="email"
              onChange={(event) => {
                setemail(event.target.value);
              }}
              placeholder="anurag@gmail.com"
              className="border border-gray-300 p-1.5 w-96"
            />
          </div>
          <div className="">
            <p className="text-[#2f323a] mb-1 font-semibold">Password</p>
            <input
              type="password"
              placeholder="***********"
              className="border border-gray-300 p-1.5 w-96"
            />
          </div>

          <div className="">
            <p className="text-[#2f323a] mb-1 font-semibold">
              Confirm Password
            </p>
            <input
              type="password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              placeholder="***********"
              className="border border-gray-300 p-1.5 w-96"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              creatingUser();
            }}
            className="bg-[#d42041] text-white py-2 w-40"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
