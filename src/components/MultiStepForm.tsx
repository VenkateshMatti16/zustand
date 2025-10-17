import React from "react";
import useFormStore from "../store/formStore";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


const MultiStepForm: React.FC = () => {
const step = useFormStore((s) => s.step);


return (
<div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
   <div className="mb-4">
     <div className="text-sm text-gray-500">Step {step} of 3</div>
     <div className="h-2 bg-gray-200 rounded mt-2">
       <div
          className="h-2 bg-blue-500 rounded"
           style={{ width: `${(step / 3) * 100}%` }}
            />
        </div>
      </div>


      <div>
         {step === 1 && <Step1 />}
         {step === 2 && <Step2 />}
         {step === 3 && <Step3 />}
       </div>
</div>
);
};


export default MultiStepForm;