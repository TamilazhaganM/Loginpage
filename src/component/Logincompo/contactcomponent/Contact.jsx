import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const newname = name.trim();
  const newphone = phone.trim();
  const newemail = email.trim();
  const newcity = city.trim();

  // Generate a unique ID manually
  const generateUniqueId = () => {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const postdata = async () => {
    if (!newname || !newphone || !newemail || !newcity) {
      alert("All fields must be filled out.");
      return;
    }
    const newUser = {
      id: generateUniqueId(),  
      name: newname,
      phone: newphone,
      email: newemail,
      city: newcity,
    };

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data", error);
    }
    setUsers([...users, newUser]);
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
  };

  return (
    <div className="contact-table">
      <h1 className="heading">Contact Information</h1>
      <table hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>City</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.city}</td>
              <td>
                <div className="buttons">
                  <button className="deletebtn" onClick={() => deleteUser(data.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td>{users.length + 1}</td>
            <td>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </td>
            <td>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </td>
            <td>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </td>
            <td>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </td>
            <td>
              <div className="buttons">
                <button className="Addbtn" onClick={postdata}>
                  Add
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
