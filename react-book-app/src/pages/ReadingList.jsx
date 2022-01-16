import BookList from "./BookList";
import React, { useContext, useState } from "react";
import Detailes from "./Detailes";
import { Redirect } from "react-router-dom";
import Rating from "../components/Rating";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReadingList = ({
  radingList,
  setReadingList,
  complitedList,
  setComplitedList,
  detailesData,
  setDetailesData,
}) => {
  const [notes, setNotes] = useState("");
  const [notesSaver, setNotesSaver] = useState("");

  // todo comment______________________________________________________________________________________________________________________________________

  let x = [];
  function commentHandler(e) {
    setNotes(e.target.value);
    setNotesSaver(notes);
    console.log({ notesSaver });
    // console.log("x",x);
  }
  // todo add______________________________________________________________________________________________________________________________________
  // const add = useContext(UserContext);
  console.log("readList add 11", radingList);

  function addToComplitedList(i) {
    const copyReadingList = [...radingList];
    const temp = [...complitedList];
    temp.push(copyReadingList[i]);
    setComplitedList(temp);
    console.log(temp);
  }

  // todo delete______________________________________________________________________________________________________________________________________
  function deleteItem(i) {
    const copyBookData = [...radingList];
    copyBookData.splice(i, 1);
    setReadingList(copyBookData);
    console.log("deleted", copyBookData);
  }
  // todo_________________________________________________________________________________________________________________________________
  return (
    <div>
      {detailesData ? <Redirect to="Detailes" /> : ""}
      Reading list page
      {radingList.map((book, i) => {
        return (
          <div key={i}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Discription</th>
                  <th>Text</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td
                    onClick={() => {
                      setDetailesData(book);
                    }}
                  >
                    {book.description.slice(0, 300)}...
                  </td>
                  <td>
                    {" "}
                    <textarea
                      placeholder="notes"
                      value={notes}
                      onChange={(e) => {
                        // setNotes(e.target.value);
                        // console.log("notes", notes);
                        // commentHandler(e);
                      }}
                    />
                    <Rating />
                  </td>
                  <td>
                    {" "}
                    <img src={book.imgUrl} />
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* --------------------------------------------------------------- */}
            <button onClick={() => addToComplitedList(i)}>complited</button>
            <button onClick={() => deleteItem(i)}>delete</button>
            {/* <textarea
              placeholder="notes"
              value={notes}
              onChange={(e) => {
                // setNotes(e.target.value);
                // console.log("notes", notes);
                // commentHandler(e);
              }}
            />
            <Rating />
            <p>{book.id}</p>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p
              onClick={() => {
                setDetailesData(book);
              }}
            >
              {book.description.slice(0, 300)}...
            </p>
            <img src={book.imgUrl} alt="" /> */}
            {/* ---------------------------------------------------------- */}
          </div>
        );
      })}
    </div>
  );
};
export default ReadingList;
