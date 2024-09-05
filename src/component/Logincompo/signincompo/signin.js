import React, { useState, useEffect } from "react";
import "./signin.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([{ name: "", mail: "", pass: "" }]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));
  }, []);
  function handleUser(e) {
    setUser(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit() {
    const name = user.trim();
    const mail = email.trim();
    const pass = password.trim();
    if (name && mail && pass) {
      const newUser = { name, mail, pass };
      axios
        .post("https://jsonplaceholder.typicode.com/users", newUser)
        .then((response) => console.log(response.data));
      setData([...data, { id: data.length + 1, ...newUser }]);
      setUser("");
      setEmail("");
      setPassword("");
    } else {
      alert("Kindly fill every information");
    }
  }

  function naveigatetologin() {
    navigate("/login");
  }

  return (
    <div>
      <div id="signinsection">
        <div className="signin-container">
          <Container>
            <Row>
              <Col className="welcomesection2" lg={6}>
                <h1>Welcome Buddy!</h1>
                <p>Please sign in to explore the new feature of our platform</p>
              </Col>
              <Col className="inputsection2" lg={6}>
                <h1>Signin</h1>
                <div className="inputs2">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      value={user}
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={handleUser}
                      required
                    ></input>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      value={email}
                      class="form-control"
                      placeholder="email"
                      onChange={handleEmail}
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <div><input
                      type={visible ? "text" : "password"}
                      value={password}
                      class="form-control"
                      placeholder="Password"
                      onChange={handlePassword}
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                    <div className=" input-group-text eyebtn" onClick={()=>setVisible(!visible)}>
                    {visible? <FontAwesomeIcon icon={faEye} />: <FontAwesomeIcon icon={faEyeSlash} />}
                   
                    </div></div>
                    
                  </div>
                </div>
                <Button className="loginbtn2" onClick={handleSubmit}>
                  Sign In
                </Button>

                <p>
                  Already have an account ?{" "}
                  <span className="linkitem" onClick={naveigatetologin}>
                    Log In
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Signin;
