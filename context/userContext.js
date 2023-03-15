import { createContext } from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

const UserContext = createContext({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

function UserContextProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const value = {
    firstName: 'Kevin',
    lastName: 'Bell',
    phone: '801-456-7890',
    email: 'bellKevin@pm.me',
    setFirstName: 'Kevin',
    setLastName: 'Bell',
    setPhone: '801-456-7890',
    setEmail: 'bellKevin@pm.me',
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;