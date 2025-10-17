import React from "react";
import useFormStore from "../store/formstore";


const Step3: React.FC = () => {
const formData = useFormStore((s) => s.formData);
const prevStep = useFormStore((s) => s.prevStep);
const resetForm = useFormStore((s) => s.resetForm);


const handleSubmit = () => {
 alert(`submit sucess`);
resetForm();
};


return (
   <div>
     <h2 className="text-xl font-semibold mb-4">Step 3 — Review</h2>


      <div className="bg-gray-50 p-4 rounded mb-4 space-y-2">
        <div><strong>Name:</strong> {formData.name}</div>
        <div><strong>Email:</strong> {formData.email}</div>
        <div><strong>Age:</strong> {formData.age}</div>
        <div><strong>Phone:</strong> {formData.phonenumber}</div>
        <div><strong>Address:</strong> {formData.address}</div>
        <div><strong>Roll No.:</strong> {formData.rollnumber}</div>
        <div><strong>College:</strong> {formData.collegeName}</div>
      </div>


      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 rounded bg-gray-200">← Back</button>
        <button onClick={handleSubmit} className="px-4 py-2 rounded bg-green-600 text-white">Submit</button>
      </div>
    </div>
);
};


export default Step3;