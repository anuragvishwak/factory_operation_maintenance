import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function RegisterVendorForm({ setopeningRegisterVendorForm }) {
  const [vendorName, setvendorName] = useState("");
  const [vendorType, setvendorType] = useState("");
  const [contactPersonName, setcontactPersonName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [address, setaddress] = useState("");
  const [bankAccountHolderName, setbankAccountHolderName] = useState("");
  const [bankAccountNumber, setbankAccountNumber] = useState("");
  const [ifscCode, setifscCode] = useState("");
  const [bankName, setbankName] = useState("");
  const [branchName, setbranchName] = useState("");

  function registerVendor(){
    const vendorData = {
        vendorType: vendorType,
        vendorName: vendorName,
        contactPersonName: contactPersonName,
        contactNumber: contactNumber,
        email: email,
        country: country,
        state: state,
        city: city,
        pincode: pincode,
        address: address,
        bankAccountHolderName:bankAccountHolderName,
        bankAccountNumber: bankAccountNumber,
        ifscCode: ifscCode,
        bankName: bankName,
        branchName: branchName
    }

     try {
      addDoc(collection(database, "vendor_management_database"), vendorData);
      alert("Vendor Registered successfully!!!");
      setopeningRegisterVendorForm(false);
    //   renderingMachines();
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add / Register Vendor
          </p>
          <button
            onClick={() => {
              setopeningRegisterVendorForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
          <div>
            <p className=" text-[#d42041] text-lg font-semibold">
              Basic Information
            </p>

            <div className="grid grid-cols-5 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Vendor Name</p>
                <input
                  onChange={(event) => {
                    setvendorName(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Vendor Type</p>
                <select
                  onChange={(event) => {
                    setvendorType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Type</option>
                  <option>Raw Material Supplier</option>
                  <option>Machinery Supplier</option>
                  <option>Maintenance Contractor</option>
                  <option>Packaging Supplier</option>
                  <option>Logistics / Transport</option>
                  <option>Service Provider</option>
                  <option>Consultant</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Contact Person Name
                </p>
                <input
                  onChange={(event) => {
                    setcontactPersonName(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Contact Number
                </p>
                <input
                  onChange={(event) => {
                    setcontactNumber(event.target.value);
                  }}
                  placeholder="+91"
                  type="number"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Email</p>
                <input
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  placeholder="varun@gmail.com"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>

            <div className="my-4">
              <p className=" text-[#d42041] text-lg font-semibold">
                Company Address Details
              </p>
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Country</p>
                  <input
                    onChange={(event) => {
                      setcountry(event.target.value);
                    }}
                    placeholder="India"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">State</p>
                  <input
                    onChange={(event) => {
                      setstate(event.target.value);
                    }}
                    placeholder="Maharastra"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">City</p>
                  <input
                    onChange={(event) => {
                      setcity(event.target.value);
                    }}
                    placeholder="Mumbai"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Pincode</p>
                  <input
                    onChange={(event) => {
                      setpincode(event.target.value);
                    }}
                    placeholder="493874"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Address</p>
                <textarea
                  onChange={(event) => {
                    setaddress(event.target.value);
                  }}
                  placeholder="Laxmi Industrial Estate, Andheri West"
                  className="border border-gray-300 p-1 h-32 w-full"
                />
              </div>
            </div>

            <div>
              <p className=" text-[#d42041] text-lg font-semibold">
                Bank Details
              </p>

              <div className="grid grid-cols-5 gap-4">
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Bank Account Holder Name
                  </p>
                  <input
                    onChange={(event) => {
                      setbankAccountHolderName(event.target.value);
                    }}
                    placeholder="Gopi Ravi Chandran"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Bank Account Number
                  </p>
                  <input
                    onChange={(event) => {
                      setbankAccountNumber(event.target.value);
                    }}
                    placeholder="857893457934"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">IFSC Code</p>
                  <input
                    onChange={(event) => {
                      setifscCode(event.target.value);
                    }}
                    placeholder="857893457934"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Bank Name</p>
                  <input
                    onChange={(event) => {
                      setbankName(event.target.value);
                    }}
                    placeholder="857893457934"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Branch Name
                  </p>
                  <input
                    onChange={(event) => {
                      setbranchName(event.target.value);
                    }}
                    placeholder="857893457934"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              registerVendor();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Register Vendor
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterVendorForm;
