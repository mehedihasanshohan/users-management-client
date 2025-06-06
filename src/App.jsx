import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers ] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);
    console.log(name, email);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Server response:', data);

      const newUsers = [...users, data];
      setUsers(newUsers);
      // Optional: Update UI or clear form
      form.reset();
    });
  }

  return (
    <>
      <h2>user management system</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id=''/>
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="add user" />
      </form>
    </>
  )
}

export default App
