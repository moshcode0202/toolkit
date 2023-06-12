import { Field, Formik, Form } from "formik";
import { useRef, useState } from "react";
const Add = () => {
  const formRef = useRef();
  const defaultParams = { id: "", firstName: "", lastName: "", age: "" };
  const [params, setParams] = useState(defaultParams);
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);
  const handleSubmitAdd = (values) => {
    if (values.id) {
      const newData = list.map((data) => {
        if (data.id === values.id) {
          return {
            ...data,
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            age: values.age,
          };
        }
        return data;
      });
      setList(newData)
      formRef.current.resetForm();
    } else {
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
      formRef.current.resetForm();
    }
  };
  const editData = (data) => {
    formRef.current.setValues(data);
  };
  return (
    <div>
      <Formik
        innerRef={formRef}
        initialValues={params}
        onSubmit={handleSubmitAdd}
      >
        {({ isSubmitting, values }) => {
          return (
            <Form>
              <label>FirstName</label>
              <Field type="text" name="firstName" />
              <label>LastName</label>
              <Field type="text" name="lastName" />
              <label>Age</label>
              <Field type="number" name="age" />
              <button type="submit">{values.id ? "Edit" : "Add"} Data</button>
            </Form>
          );
        }}
      </Formik>
      {list.map((data) => {
        return (
          <ul key={data.id} onClick={() => editData(data)}>
            <li>{data.id}</li>
            <li>{data.firstName}</li>
            <li>{data.lastName}</li>
            <li>{data.age}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Add;
