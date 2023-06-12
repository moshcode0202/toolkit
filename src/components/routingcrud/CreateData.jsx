import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateData = () => {
  const navigate = useNavigate();
  const defaultParams = { id: "", firstName: "", lastName: "", age: "" };
  const [params, setParams] = useState(defaultParams);
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);
  const handleSubmitAdd = (values) => {
    console.log(values);
    setList([
      ...list,
      {
        id: number + 1,
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
      },
    ]);
    setNumber(number + 1);
    // localStorage.setItem("routingcrud",JSON.stringify([]))
    // localStorage.setItem("routingcrud",JSON.stringify([]))
    navigate("/main");
  };
  return (
    <div>
      <Formik initialValues={params} onSubmit={handleSubmitAdd}>
        {({ isSubmitting, values }) => {
          return (
            <Form>
              <label>FirstName</label>
              <Field type="text" name="firstName" />
              <label>LastName</label>
              <Field type="text" name="lastName" />
              <label>Age</label>
              <Field type="number" name="age" />
              <button type="submit"> Add Data</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateData;
