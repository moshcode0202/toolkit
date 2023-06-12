import { Field, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";

const SimpleTodoLocal = () => {
  const formRef = useRef();
  const defaultParams = { id: "", name: "", email: "", message: "" };
  const [params, setParams] = useState(defaultParams);
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);
  const formSubmit = (values) => {
    if (params?.id) {
      const newData = list.map((items) => {
        if (items.id === params?.id) {
          return {
            ...items,
            name: values.name,
            email: values.email,
            message: values.message,
          };
        }
        return items;
      });
      setList(newData);
      formRef.current.resetForm();
      localStorage.setItem("dataList", JSON.stringify(newData));
    } else {
      const newData = list;
      list.push({
        id: number + 1,
        name: values.name,
        email: values.email,
        message: values.message,
      });
      setList(newData);
      setNumber(number + 1);
      formRef.current.resetForm();
      localStorage.setItem("dataList", JSON.stringify(newData));
      localStorage.setItem("number", JSON.stringify(number));
    }
  };
  const editData = (data) => {
    formRef.current.setValues(data);
    setParams({
      ...params,
      id: data.id,
      name: data.name,
      email: data.email,
      message: data.message,
    });
  };
  const deleteList = (id) => {
    const newData = list.filter((d) => d.id !== id);
    setList(newData);
    localStorage.setItem("dataList", JSON.stringify(newData));
  };
  useEffect(() => {
    const storedData = localStorage.getItem("dataList");
    if (storedData === null) {
      localStorage.setItem("dataList", JSON.stringify([]));
    } else {
      setList(JSON.parse(localStorage.getItem("dataList")));
      setNumber(JSON.parse(localStorage.getItem("number")));
    }
  }, []);
  return (
    <div>
      <Formik innerRef={formRef} initialValues={params} onSubmit={formSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" />
            <label htmlFor="message">Message:</label>
            <Field as="textarea" name="message" id="message" />
            <button type="submit">{params?.id ? "Edit" : "Add"}</button>
          </Form>
        )}
      </Formik>
      {list.map((data, i) => {
        return (
          <div key={i} className="flex gap-3 flow-row">
            <div className="bg-cyan-200 mt-3">{data.name} </div>
            <div className="bg-cyan-500 mt-3">{data.email}</div>
            <div className="bg-cyan-500 mt-3">{data.message}</div>
            <button
              className="btn text-black bg-cyan-200 mt-3"
              onClick={() => editData(data)}
            >
              edit
            </button>
            <button
              className="btn text-black bg-red-700 mt-3"
              onClick={() => deleteList(data.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default SimpleTodoLocal;
