import React, { useState, useRef } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postLogin } from "../helpers/axiosHelper";

export const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return alert("Please enter your email and password");
    }
    setLoading(true);
    const { data } = await postLogin({ email, password });
    setLoading(false);
    console.log(data);

    if (data.status === "Success") {
      //if log in success, store user data in session storage and redirect to dashboard
      const { name, email, _id } = data.user;
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
    }

    //else show error message
    setError(data.message);
  };

  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome Back</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleOnSubmit}>
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Row>
  );
};
