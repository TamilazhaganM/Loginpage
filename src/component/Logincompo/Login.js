import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const navigate=useNavigate()

  function navigatetosignin(){
    navigate("/")
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
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    required
                  ></input>
                </div>
              </div>
              <Button className="loginbtn">Login</Button>

              <p>Don't have an account ? <span className="linkitem" onClick={navigatetosignin}>Sign In</span></p>

            </Col>
           
          </Row>
        </Container>
      </div>
    
    </div>
  );
};

export default Login;
