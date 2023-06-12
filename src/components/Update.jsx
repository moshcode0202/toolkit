import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3030/users/" + id, data)
      .then((res) => alert("Data Updated Successfully"));
       navigate("/crudapi");
  };

  return (
    <div>
      <h1>Create Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>id</label>
          <input type="text" disabled value={data.id} />
        </div>
        <div>
          <label>name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
