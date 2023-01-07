import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux/features/userSlice";

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className="addUsers">
        <input
          type="text"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName((state) => e.target.value)}
        />
        <input
          type="text"
          value={username}
          placeholder="Username..."
          onChange={(e) => setUsername((state) => e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addUser({ id: userList.length, name, username }));
            setName((state) => "");
            setUsername((state) => "");
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name} </h1>
              <h1> {user.username} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
