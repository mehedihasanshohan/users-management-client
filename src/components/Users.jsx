// Users.jsx
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      {users.map((user, index) => (
        <p key={user._id}>{index + 1}. {user.name}: {user.email}</p>
      ))}
    </div>
  );
};

export default Users;
