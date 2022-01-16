import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import BookList from "./pages/BookList";
import ReadingList from "./pages/ReadingList";
import ComplitedList from "./pages/complitedList";
import Styles from "./css/style.module.css";
import Detailes from "./pages/Detailes";
import "./css/home.css";
import { Button, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [auth, setAuth] = useState(null);
  const [radingList, setReadingList] = useState([]);
  const [complitedList, setComplitedList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [spinerLoding, setSpinerLoding] = useState("Loading...");
  const [detailesData, setDetailesData] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        {/* ------------------------------------------------------------------------ */}

        {/* --------------------------------------------------------------------------- */}
        <div>
          {spinner ? <p className={Styles.loader}>{spinerLoding}</p> : ""}
          {auth ? "" : <Link to="/"></Link>}
          {/* <br />
        <hr /> */}
          {auth ? <Link to="/ReadingList">Reading List</Link> : ""}
          {/* <br />
        <hr /> */}
          {auth ? <Link to="/BookList">BookList</Link> : ""}
          {auth ? "" : <Redirect to="/" />}
          {auth ? <Redirect to="/BookList" /> : ""}
          {/* <br />
        <hr /> */}
          {auth ? <Link to="/ComplitedList">ComplitedList</Link> : ""}
          {/* <br />
        <hr /> */}
          {auth ? <Link to="/Detailes">Detailes</Link> : ""}
          {/* <br />
        <hr /> */}
          {auth ? <button onClick={() => setAuth("")}>Logout</button> : ""}

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  setAuth={setAuth}
                  spinerLoding={spinerLoding}
                  setSpinerLoding={setSpinerLoding}
                  spinner={spinner}
                  setSpinner={setSpinner}
                  // setbackgroundImg={setbackgroundImg}
                />
              )}
            />
            <Route
              exact
              path="/ReadingList"
              render={() => (
                <ReadingList
                  setAuth={setAuth}
                  radingList={radingList}
                  setReadingList={setReadingList}
                  complitedList={complitedList}
                  setComplitedList={setComplitedList}
                  detailesData={detailesData}
                  setDetailesData={setDetailesData}
                />
              )}
            />
            <Route
              exact
              path="/BookList"
              render={() => (
                <BookList
                  setAuth={setAuth}
                  radingList={radingList}
                  setReadingList={setReadingList}
                  spinerLoding={spinerLoding}
                  setSpinerLoding={setSpinerLoding}
                  spinner={spinner}
                  setSpinner={setSpinner}
                  detailesData={detailesData}
                  setDetailesData={setDetailesData}
                />
              )}
            />

            <Route
              exact
              path="/ComplitedList"
              render={() => (
                <ComplitedList
                  setAuth={setAuth}
                  radingList={radingList}
                  to
                  setReadingList={setReadingList}
                  complitedList={complitedList}
                  setComplitedList={setComplitedList}
                  detailesData={detailesData}
                  setDetailesData={setDetailesData}
                />
              )}
            />
            <Route
              exact
              path="/Detailes"
              render={() => (
                <Detailes
                  setAuth={setAuth}
                  detailesData={detailesData}
                  setDetailesData={setDetailesData}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
