import React, { useState, } from "react";
import "./signin.css";
import Footer from "../../Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([{ name: "", mail: "", pass: "" }]);

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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
   


    if (name && mail && pass) {
      const newUser = { name, mail, pass };
      setData([...data, { id: data.length + 1, ...newUser }]);
      setUser("");
      setEmail("");
      setPassword("");
    } else if(name===""){
      alert("Please Enter Your Username ")
    }else if(mail===""){
      alert("Please Enter Your email ")
    }else if(!emailPattern.test(mail)){
      alert("Please Enter a Valid email address")
    }
    else if(pass===""){
      alert("Please Enter Your Password ")
    }
    if (name&&mail&&pass) {
      navigate("/Contact")
    }
  
  }

  function naveigatetologin() {
    navigate("/login");
  }

  return (
    <div>
    <section id="firstsection">
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
                <Form className="inputs2">
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
                      placeholder="username@gmail.com"
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
                    <div className=" eyebtn" onClick={()=>setVisible(!visible)}>
                    {visible? <FontAwesomeIcon icon={faEye} />: <FontAwesomeIcon icon={faEyeSlash} />}
                   
                    </div></div>
                    
                  </div>
                </Form>
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
    </section>
    <Footer />
    </div>
  );
};

export default Signin;
