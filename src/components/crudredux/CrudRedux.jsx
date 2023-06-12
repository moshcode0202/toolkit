import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const CrudRedux = () => {


  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray700">
        Crud with redux toolkit
      </h1>
      <UserList />
    </div>
  );
};

export default CrudRedux;
