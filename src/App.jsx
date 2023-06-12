import { BrowserRouter,Router,Routes,Route, useParams } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Crudapi from "./components/CrudApi";
import Create from "./components/Create";
import Update from "./components/Update";
import { ToastContainer } from "react-toastify";
import CrudRedux from "./components/crudredux/CrudRedux";
import Main from "./components/routingcrud/Main";
import CreateData from "./components/routingcrud/CreateData";
import AddUser from "./components/crudredux/AddUser";
import EditUser from "./components/crudredux/EditUser";
import LocalTodo from "./components/onlylocalstorage/LocalTodo";
import SimpleTodoLocal from "./components/simpletodowithlocal/SimpleTodoLocal";
function App() {
  const {id}= useParams()
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/crudapi" element={<Crudapi/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/crudredux" element={<CrudRedux/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/createdata" element={<CreateData/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path={`/edit-user/:id`} element={<EditUser/>}/>
        <Route path="/localtodo" element={<LocalTodo/>}/>
        <Route path="/simpletodolocal" element={<SimpleTodoLocal/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
