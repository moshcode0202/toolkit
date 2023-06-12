import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../store/slices/userSlice";

const EditUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const params = useParams();
  const users = useSelector((store) => store.users);
  console.log(users,'users')
  const existingUser = users.filter(user => user.id == params.id);
  console.log(existingUser,'existing user data')
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name:name,
    email:email
  });
  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    // console.log(values);
    dispatch(editUser({
        id:params.id,
        name:values.name,
        email:values.email,
    }))
    navigate("/crudredux");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon doe" }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
