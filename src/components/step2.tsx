 import React, { useState } from "react";
import useFormStore from "../store/formstore";

const Step2: React.FC = () => {
  const formData = useFormStore((s) => s.formData);
  const updateFormData = useFormStore((s) => s.updateFormData);
  const nextStep = useFormStore((s) => s.nextStep);
  const prevStep = useFormStore((s) => s.prevStep);

  const [preview, setPreview] = useState<string | null>(formData.profileImage || null);
  const [showModal, setShowModal] = useState(false);

  const canProceed =
    formData.phonenumber.trim() !== "" && formData.rollnumber.trim() !== "";

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        updateFormData({ profileImage: reader.result as string });
        setShowModal(true);  
       };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Step 2 — Personal Details
        </h2>

        <div className="flex flex-col space-y-6">
           
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 text-left">
              Address
            </label>
            <input
              value={formData.address || ""}
              onChange={(e) => updateFormData({ address: e.target.value })}
              placeholder="Street, City, State"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

           
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 text-left">
              Phone
            </label>
            <input
              value={formData.phonenumber || ""}
              onChange={(e) => updateFormData({ phonenumber: e.target.value })}
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

        
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 text-left">
              Roll Number
            </label>
            <input
              value={formData.rollnumber || ""}
              onChange={(e) => updateFormData({ rollnumber: e.target.value })}
              placeholder="Roll / Reg. number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

           
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 text-left">
              College
            </label>
            <input
              value={formData.collegeName || ""}
              onChange={(e) => updateFormData({ collegeName: e.target.value })}
              placeholder="College name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

            <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 text-left">
              Upload Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              onClick={() => preview && setShowModal(true)} // click input opens modal if preview exists
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100 transition"
            />
          </div>
 
          <div className="flex justify-between mt-4">
            <button
              onClick={prevStep}
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              onClick={nextStep}
              disabled={!canProceed}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
                canProceed
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

       {showModal && preview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src={preview}
            alt="Profile"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Step2;
