import React, { useState, useContext, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
const Register = () => {
  const [entryData, setEntryData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
      setEntryData({ name: "", email: "", password: "", confirmPassword: "" });
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={entryData.name}
                  onChange={onHandleChange}
                  placeholder="Enter Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Name Required
                </Form.Control.Feedback>
              </Form.Group>
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

              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={entryData.confirmPassword}
                  name="confirmPassword"
                  onChange={onHandleChange}
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Confirm Password Required
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
              <p style={{ marginTop: "35px" }}>
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </Form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default withRouter(Register);
