import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Crudapi = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setRecords(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3030/users/" + id).then((res) => {
      alert("selected data deleted successfully");
    window.location.reload(false);
    });
  };
  return (
    <div>
      <h1>CrudApi</h1>
      <Link to="/create">
        <button type="button" className="text-end">
          Add +
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`} style={{ margin: "5px" }}>
                    Update
                  </Link>
                  <Link onClick={() => handleDelete(d.id)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Crudapi;
