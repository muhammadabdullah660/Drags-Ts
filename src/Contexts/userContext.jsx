import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/Reducer/reducer";
import {
  onAuthStateChangedListener,
  createUserProfileDocumentFromAuth,
} from "../utils/Firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
// userReducer is a function that takes two arguments: state and action
// state is the current state of the user
// action is an object that has a type and a payload
// type is a string that describes the action
// payload is the data that is needed to perform the action
// userReducer returns a new state based on the action type
const userReducer = (state, action) => {
  console.log("userReducer", state, action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unknown action type: ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};
export default function UserProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState();
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log("currentUser", currentUser);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocumentFromAuth(user);
      }
      setCurrentUser(user);
    }); // onAuthStateChangedListener is a function that takes a callback function as an argument
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
