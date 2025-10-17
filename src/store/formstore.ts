import { create } from "zustand";


export interface FormData {
      name: string;
      email: string;
      age: string;
      address: string;
      rollnumber: string;
      phonenumber: string;
      collegeName: string;
      profileImage?: string;
}


interface FormStore {
 formData: FormData;
 step: number;
 setStep: (s: number) => void;
 nextStep: () => void;
 prevStep: () => void;
 updateFormData: (patch: Partial<FormData>) => void;
 resetForm: () => void;
}


const initialForm: FormData = {
   name: "",
   email: "",
   age: "",
   address: "",
   rollnumber: "",
   phonenumber: "",
   collegeName: "",
   profileImage: "",
};


const useFormStore = create<FormStore>((set) => ({
   formData: initialForm,
    step: 1,
     setStep: (s) => set({ step: s }),
     nextStep: () => set((st) => ({ step: Math.min(3, st.step + 1) })),
     prevStep: () => set((st) => ({ step: Math.max(1, st.step - 1) })),
     updateFormData: (patch) =>
     set((st) => ({ formData: { ...st.formData, ...patch } })),
     resetForm: () => set({ formData: initialForm, step: 1 }),
}));


export default useFormStore;