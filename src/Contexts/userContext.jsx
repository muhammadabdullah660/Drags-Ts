import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserProfileDocumentFromAuth,
} from "../utils/Firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
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
