import { createStore, createHook } from "react-sweet-state";


const Store = createStore({
  // value of the store on initialisation
  initialState: {
    userData:{},
    firstName:"",
    lastName: "",
    photo:{},
    phone: "",
    email: "",
    occupation:"",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    dateOfBirth: "",
    drivingLicense: "",
    nationality: "",
    professionalSummary:"",
    employmentHistory:[],
    languages:[],
    skills:[],
    educations:[]
  },
  // actions that trigger store mutation
  actions: {
    setForm:
      (value, param) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        param!=="all"?setState({
          ...getState,
          [param]: value,
        }):setState(value)
      },
      
    
  },
  // optional, mostly used for easy debugging
  name: "form",
});

export const useForm = createHook(Store);
