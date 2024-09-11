import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [mail, setEmail] = useState(""); // Corrected state variable
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  function navigatetosignin() {
    navigate("/");
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit() {
    const trimmedEmail = mail.trim();
    const trimmedPassword = password.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // Simple validation for empty fields
    if (!trimmedEmail) {
      alert("Please enter your email.");
      return;
    }
    if(!emailPattern.test(trimmedEmail)){
      alert("Please Enter a Valid email address")
      return;
    }
    if (!trimmedPassword) {
      alert("Please enter your password.");
      return;
    }

    const newUser = { email: trimmedEmail, password: trimmedPassword };
    setData([...data, { id: data.length + 1, ...newUser }]);

    // Navigate to the Contact page if both fields are filled
    navigate("/Contact");
  }

  return (
    <section id="firstsection">
      <div id="Loginsection">
        <div className="login-container">
          <Container>
            <Row>
              <Col className="welcomesection" lg={6}>
                <h1>Great to see you again!</h1>
                <p>Ready to explore what's new?</p>
              </Col>
              <Col className="inputsection" lg={6}>
                <h1>Login</h1>
                <div className="inputs">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      value={mail}
                      className="form-control"
                      placeholder="Email"
                      onChange={handleEmail} // Added onChange handler
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <div>
                      <input
                        type={visible ? "text" : "password"}
                        value={password}
                        className="form-control"
                        placeholder="Password"
                        onChange={handlePassword}
                        aria-describedby="basic-addon1"
                        required
                      />
                      <div
                        className="eyebtn2"
                        onClick={() => setVisible(!visible)}
                      >
                        {visible ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="loginbtn" onClick={handleSubmit}>
                  Login
                </Button>

                <p>
                  Don't have an account?{" "}
                  <span className="linkitem" onClick={navigatetosignin}>
                    Sign In
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
