import { createStore, createHook } from "react-sweet-state";


const Store = createStore({
  // value of the store on initialisation
  initialState: {
    firstName:"Anthony",
    lastName: "Romero",
    photo:{},
    phone: "0414-29292992",
    email: "anthonyromeroromero14@gmail.com",
    occupation:"web developer",
    country: "",
    city: "",
    address: "ciudad guayana estado bolivar",
    postalCode: "",
    dateOfBirth: "",
    drivingLicense: "",
    nationality: "",
    professionalSummary:"",
    employmentHistory:[{jobTitle:"titulo del trabajo",employer:"Empleo",begin:"aug 2018",end:"aug 2020",description:"descripcion"},{jobTitle:"titulo del trabajo2",employer:"empleo",begin:"begin",end:"end",description:"descripcion2"}],
    languages:[{language:"ingles",rating:"Elementary"},{language:"español",rating:"Elementary"}],
    skills:[{skill:"artes",rating:"20"},{skill:"economia",rating:"30"}],
    educations:[{school:"institucion",degree:"tecnico superior",start:"incio",finish:"fin",description:"descripcion"},]
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
