import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const Register = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validErr, setValidErr] = useState("");
  function postRegister() {
    const API_KEY = "AIzaSyBtm4mTxh54-ZVHLl4PYZVmlj5myqctpMI";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    axios
      .post(url, {
        email: email,
        password: password,
        // password: confirmPassword,
      })
      .then(function (response) {
        setAuth(response);
        console.log("11111");
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  function isPasswordValid() {
    if (
      password.length === confirmPassword.length &&
      password.length >= 6 &&
      confirmPassword.length >= 6
    ) {
      console.log("its valid");
    } else {
      return setValidErr(
        "password does not mutch or password is less than 6 tabs"
      );
    }
  }

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // isPasswordValid()? postRegister():" ";
          // if (isPasswordValid() === true) {
          //  return postRegister();
          // }
          isPasswordValid();
          postRegister();
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            // type="email"
            placeholder="Enter email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
{/* --------------------------------------------------- */}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
{/* --------------------------------------------------- */}

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

{/* --------------------------------------------------- */}
<Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
               type="password"
               placeholder="password"
               onChange={(e) => {
                 setConfirmPassword(e.target.value);
               }}
          />
        </Form.Group>
{/* --------------------------------------------------- */}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          // isPasswordValid()? postRegister():" ";
          // if (isPasswordValid() === true) {
          //  return postRegister();
          // }
          isPasswordValid();
          postRegister();
        }}
      >
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="register" />
        <br />
      </form> */}
      <p style={{ color: "red" }}>{validErr}</p>
    </div>
  );
};

export default Register;
