import { useState } from "react";
const Edit = () => {
  const defaultParams = { id: "", firstName: "", lastName: "", age: "" };
  const [params, setParams] = useState(defaultParams);
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      const newData = list.map((listData) => {
        if (listData.id === params.id) {
          return {
            ...listData,
            id: params.id,
            firstName: params.firstName,
            lastName: params.lastName,
            age: params.age,
          };
        }
        return listData;
      });
      setList(newData);
      setParams(defaultParams);
    } else {
      setList([
        ...list,
        {
          id: number + 1,
          firstName: params.firstName,
          lastName: params.lastName,
          age: params.age,
        },
      ]);
      setNumber(number + 1);
      setParams(defaultParams);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>FirstName</label>
            <input
              type="text"
              value={params.firstName}
              onChange={(e) =>
                setParams({ ...params, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label>LastName</label>
            <input
              type="text"
              value={params.lastName}
              onChange={(e) =>
                setParams({ ...params, lastName: e.target.value })
              }
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              value={params.age}
              onChange={(e) => setParams({ ...params, age: e.target.value })}
            />
          </div>
          <button type="submit">{params.id ? "Edit" : "Add"} Data</button>
        </div>
      </form>
      {list.map((data) => {
        return (
          <ul
            key={data.id}
            onClick={() =>
              setParams({
                ...params,
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
              })
            }
          >
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

export default Edit;
