import React from "react";
import useFormStore from "../store/formstore";

const Step1: React.FC = () => {
  const formData = useFormStore((s) => s.formData);
  const updateFormData = useFormStore((s) => s.updateFormData);
  const nextStep = useFormStore((s) => s.nextStep);

  const canProceed =
    formData.name.trim() !== "" && /\S+@\S+\.\S+/.test(formData.email);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Step 1 — Personal Details
        </h2>

        <div className="flex flex-col space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => updateFormData({ age: e.target.value })}
              placeholder="Enter your age"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition"
            />
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={nextStep}
              disabled={!canProceed}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition ${
                canProceed
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
