import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/users", inputData).then((res) => {
      alert("Data Added Successfully");
      navigate('/crudapi')
    });
  };
  return (
    <div>
      <h1>Create Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
