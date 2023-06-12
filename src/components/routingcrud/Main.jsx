import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    let datas = localStorage.getItem("routingcrud");
    setData(JSON.parse(datas));
  }, []);
console.log(data,'datatattata')
  return (
    <div>
      <button type="button" onClick={() => navigate("/createdata")}>
        Crreate Data
      </button>
      <br />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item}>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
