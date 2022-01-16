import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const Login = ({ setAuth, setSpinner, setbackgroundImg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function postLogin() {
    const API_KEY = "AIzaSyBtm4mTxh54-ZVHLl4PYZVmlj5myqctpMI";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setAuth(response);
        setbackgroundImg(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  return (
    <div>
      {" "}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          postLogin();
          setSpinner(true);
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            // type="email"
            placeholder="Enter email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {/* ----------------------------------------------------------------------------------------------------------- */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          postLogin();
          setSpinner(true);
        }}
      >
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form> */}
      {/* ----------------------------------------------------------------------------------------------------------- */}

    </div>
  );
};

export default Login;
