// Users.jsx
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleClick = _id => {
    console.log('delete', _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method : 'DELETE'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
  })
  }

  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      {users.map((user, index) => (
        <p key={user._id}>{index + 1}. {user.name}: {user.email} {user._id}
        <button onClick={() => handleClick(user._id)}>Delete</button></p>
      ))}
    </div>
  );
};

export default Users;
