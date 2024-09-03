import React from 'react'
import "./signin.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from 'react-router-dom';

const Signin = () => {
    const navigate=useNavigate()

    function naveigatetologin(){
        navigate("/login")
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
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                  ></input>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faEnvelope} />

                  </span>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    aria-label="email"
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
              <Button className="loginbtn2">Sign In</Button>

              <p>Already have an account ? <span className='linkitem' onClick={naveigatetologin}>Log In</span></p>

            </Col>
           
          </Row>
        </Container>
      </div>
    
    </div>
    </div>
  )
}

export default Signin