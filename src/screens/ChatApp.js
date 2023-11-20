import React, { useState, useEffect } from "react";
import Chat from "./Chatt.js";
import Users from "./User";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import Connect from "./Connect.js";

const defaultUsers = [
  { id: 1, name: "Dr. Ved Sushruta", job:"Dentist", avatar: "https://placeimg.com/140/140/any" },
  { id: 2, name: "Dr. Ved Sushruta", job:"Dentist",  avatar: "https://placeimg.com/140/140/any" },
  { id: 3, name: "Dr. Ved Sushruta",  job:"Dentist", avatar: "https://placeimg.com/140/140/any" },
  { id: 4, name: "Dr. Ved Sushruta",  job:"Dentist", avatar: "https://placeimg.com/140/140/any" },
  { id: 5, name: "Dr. Ved Sushruta",  job:"Dentist", avatar: "https://placeimg.com/140/140/any" },
];

export default function ChatApp() {
  const [currentPage, setCurrentPage] = useState("users");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(defaultUsers);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigation = useNavigation();

  const onClickUser = (user) => {
    setCurrentPage("chat");
    setSelectedUser(user);
  };
  const onAddUser = () => {};

  const onBack = () => {
    setCurrentPage("users");
  };
  const backToFirstPage=()=>{navigation.goBack(Connect)}

  switch (currentPage) {
    case "users":
      return (
        <Users
          users={users}
          onClickUser={onClickUser}
          userToAdd={userToAdd}
          setUserToAdd={setUserToAdd}
          onAddUser={onAddUser}
          onBack={backToFirstPage}
        />
      );
    case "chat":
      return <Chat selectedUser={selectedUser} onBack={onBack} />;
    default:
      return null;
  }
}
