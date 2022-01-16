import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button } from "react-bootstrap";
import "../css/home.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({
  setAuth,
  spinerLoding,
  setSpinerLoding,
  spinner,
  setSpinner,
}) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="home">
      <Button
      className="button"
        onClick={() => {
          setDisplay(false);
          // setSpinner(true);
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          setDisplay(true);
        }}
      >
        Register
      </Button>

      {display ? (
        <Register setAuth={setAuth} />
      ) : (
        <Login setAuth={setAuth} setSpinner={setSpinner} />
      )}
    </div>
  );
};

export default Home;
