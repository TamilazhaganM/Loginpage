import React, { useState } from "react";
import "./Contact.css";
// import { Table } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [apidata]=useState([])
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [city,setCity]=useState("")


  const newname = name.trim();
  const newphone = phone;
  const newemail = email.trim();
  const newcity=city.trim()

  // const getapidata=async()=>{
  //   const resp =await axios.get("https://jsonplaceholder.typicode.com/users")
  //   setApidata(resp.data)
  // }

  // useEffect(()=>{getapidata()},[])

  const postdata = async () => {
   const response= await axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: newname,
        phone: newphone,
        email: newemail,
        city:newcity,
      })
    setUsers([...users, response.data]);
    setName("");
    setPhone("");
    setEmail("");
    setCity("")
  };
  const combineddata=[...apidata,...users]
  return (
    <div className="contact-table">
      <h1>Contact Information</h1>        
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
            {combineddata.map((data,index)=>(   <tr key={data.id}>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.city}</td>

                <td>
                  <div className="buttons">
                    <button className="editbtn">Edit</button>
                    <button className="deletebtn">Delete</button>
                  </div>
                </td>
              </tr>))}
           
              <tr>
                <td>{combineddata.length+1}</td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </td>
                <td>
                  {" "}
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
