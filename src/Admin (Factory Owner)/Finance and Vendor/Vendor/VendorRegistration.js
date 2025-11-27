import React, { useEffect, useState } from "react";
import RegisterVendorForm from "./RegisterVendorForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";

function VendorRegistration() {
  const [openingRegisterVendorForm, setopeningRegisterVendorForm] =
    useState(false);
  const [gettingVendors, setgettingVendors] = useState([]);
  const [openingAdditionalData, setopeningAdditionalData] = useState(false);

  async function renderingMachines() {
    const taskDetails = await getDocs(
      collection(database, "vendor_management_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingVendors(multipleArray);
  }

  useEffect(() => {
    renderingMachines();
  }, []);

  return (
    <div>
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Vendor Registration & Management
          </p>
          <p className="text-[#d42041]">
            Add and Manage vendors from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Assigned Machines...."
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningRegisterVendorForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            Register Vendor
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {gettingVendors.map((vendor) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-bold text-white text-lg">
                {vendor.vendorName}
              </p>
              <p className="text-sm bg-white py-1 px-3 w-44 text-center rounded-full text-[#d42041] font-semibold">
                {vendor.vendorType}
              </p>
            </div>

            <div className="bg-white p-4">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-300 p-2.5">
                    <p className="text-sm text-[#2f323a]">Contact Person</p>
                    <p className="text-[#d42041] font-semibold">
                      {vendor.contactPersonName}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-2.5">
                    <p className="text-sm text-[#2f323a]">Phone Number</p>
                    <p className="text-[#d42041] font-semibold">
                      {vendor.contactNumber}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-2.5">
                    <p className="text-sm text-[#2f323a]">Email</p>
                    <p className="text-[#d42041] font-semibold">
                      {vendor.email}
                    </p>
                  </div>
                </div>

                <div className="flex mt-4 justify-end">
                  <button
                    onClick={() => {
                      setopeningAdditionalData(!openingAdditionalData);
                    }}
                    className="bg-[#2f323a] text-white py-1 px-3 font-smeibold text-sm"
                  >
                    See Details
                  </button>
                </div>
              </div>

              {openingAdditionalData && (
                <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
                  <div className="bg-white w-6/12 p-4">
                    <div className="flex items-start justify-between">
                      <p className="text-[#d42041] text-xl font-bold">
                        Additional Details
                      </p>
                      <button
                        onClick={() => {
                          setopeningAdditionalData(false);
                        }}
                        className="font-semibold"
                      >
                        Close
                      </button>
                    </div>
                    <div>
                      <p className="mb-1.5 text-lg font-semibold text-[#2f323a]">
                        Address
                      </p>

                      <div>
                        <p className="text-[#d42041] font-semibold">
                          {vendor.address}, {vendor.city}, {vendor.state},{" "}
                          {vendor.country}, {vendor.pincode}.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="mb-1.5 text-lg font-semibold text-[#2f323a]">
                        Banking Details
                      </p>

                      <div>
                        <table className="table-auto w-full">
                          <thead className="text-white bg-[#2f323a] text-sm">
                            <th className="text-start p-1">
                              Account Holder Name
                            </th>
                            <th className="text-start">Account Number</th>
                            <th className="text-start">Bank Name</th>
                            <th className="text-start">Branch Name</th>
                            <th className="text-start">IFSC Code</th>
                          </thead>

                          <tbody className="text-[#d42041]">
                            <tr className="border-b border-gray-300">
                              <td className="text-start py-1">
                                {vendor.bankAccountHolderName}
                              </td>
                              <td className="text-start">
                                {vendor.bankAccountNumber}
                              </td>
                              <td className="text-start">{vendor.bankName}</td>
                              <td className="text-start">
                                {vendor.branchName}
                              </td>
                              <td className="text-start">{vendor.ifscCode}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {openingRegisterVendorForm && (
        <RegisterVendorForm
          setopeningRegisterVendorForm={setopeningRegisterVendorForm}
        />
      )}
    </div>
  );
}

export default VendorRegistration;
