import React, { useState, useContext, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
const Login = () => {
  const [entryData, setEntryData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  // const {handleSignIn, input, setInput, error, setError, token} = useContext(firebaseAuth)
  // useEffect(() => {
  //      if(token){
  //        setTimeout(()=>{
  //          props.history.push('/')
  //        },1000)
  //      }
  // })

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setEntryData({ ...entryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    if (isValid) {
      setValidated(false);
      console.log(entryData);
      setEntryData({ email: "", password: "" });
    } else {
      setValidated(true);
    }
  };

  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <div className="LoginPage">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={entryData.email}
                  onChange={onHandleChange}
                  placeholder="Enter email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Email Required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={entryData.password}
                  onChange={onHandleChange}
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Password Required
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <p style={{ marginTop: "35px" }}>
                Don't have an account ? <Link to="/signup">Register</Link>
              </p>
            </Form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default withRouter(Login);
