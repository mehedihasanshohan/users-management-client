import { useLoaderData } from 'react-router-dom'

const UpdateUser = () => {
  const user = useLoaderData();

  const handleUpdate =(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updateUser = {name, email};

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div>
      <h3>Update information of {user.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={user.name}/>
        <br />
        <input type="email" name="email" defaultValue={user.email}/>
        <br />
        <input type="submit" value="Update"/>
      </form>
    </div>
  );
};

export default UpdateUser