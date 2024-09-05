import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  function navigatetosignin() {
    navigate("/");
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
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
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                  ></input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <div>
                    <input
                      type={visible ? "text" : "password"}
                      value={password}
                      class="form-control"
                      placeholder="Password"
                      onChange={handlePassword}
                      aria-describedby="basic-addon1"
                      required
                    ></input>
                    <div
                      className=" input-group-text eyebtn"
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
              <Button className="loginbtn">Login</Button>

              <p>
                Don't have an account ?{" "}
                <span className="linkitem" onClick={navigatetosignin}>
                  Sign In
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
