import React, { useState } from "react";
import UsersList from "./UsersList";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";
import AirportList from "./AirportList";

function App() {
  return (
    <div>
      <UsersList />
      <CreateUser />
      <DeleteUser />
      <AirportList />
    </div>
  );
}

export default App;