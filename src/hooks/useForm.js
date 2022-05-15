import { createStore, createHook } from "react-sweet-state";
import Education from "../models/Education";
import Language from "../models/Language";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    firstName:"",
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
    professionalSummary:"",
    employmentHistory:[{jobTitle:"titulo del trabajo",employer:"empleo",begin:"begin",end:"end",description:"descripcion"},{jobTitle:"titulo del trabajo2",employer:"empleo",begin:"begin",end:"end",description:"descripcion2"}],
    languages:[{language:"ingles",rating:"Elementary"},{language:"español",rating:"Elementary"}],
    skills:[{skill:"artes",rating:"20"},{skill:"economia",rating:"30"}],
    educations:[{school:"institucion",degree:"tecnico superior",start:"incio",finish:"fin",description:"descripcion"}]
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
