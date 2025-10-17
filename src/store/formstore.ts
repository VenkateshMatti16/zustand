import {create} from "zustand";

interface FormData {
  name: string;
  email: string;
  age: string;
  address: string;
  rollnumber: string;
  phonenumber: string;
  collegename: string;
  profileImage?: string;
}
interface FormStore {
  formData: FormData;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (newData: Partial<FormData>) => void;
  resetForm: () => void;
}

const useFormStore = create<FormStore>((set) => ({
    formData: {
        name: "",
        age: "",
        email: "",
        address:"",
        rollnumber: "",
        phonenumber:"",
        collegename: "",
        profileImage: "",
    },
    step: 1,

    nextStep: () => set((state) => ({step: state.step + 1})),
    prevStep: () => set((state) => ({step: state.step - 1})),

   updateFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),

    resetForm: () => set ({
        step:1,
        formData: {
            name:"",
            age:"",
            email:"",
            address:"",
            rollnumber:"",
            phonenumber:"",
            collegename:"",
        },
    }),

}));

export default useFormStore;