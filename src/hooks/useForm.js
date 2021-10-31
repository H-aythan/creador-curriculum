import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    occupation: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    dateOfBirth: "",
    drivingLicense: "",
    nationality: "",
    professionalSummary: "",
  },
  // actions that trigger store mutation
  actions: {
    setForm:
      (value, param) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          ...getState,
          [param]: value,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "form",
});

export const useForm = createHook(Store);
