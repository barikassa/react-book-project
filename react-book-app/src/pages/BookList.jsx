import { useEffect, useState } from "react";
import axios from "axios";
import ReadingList from "./ReadingList";
import { Redirect } from "react-router-dom";
import Detailes from "./Detailes";
import "../css/bookList.css";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = ({
  radingList,
  setReadingList,
  spinerLoding,
  setSpinerLoding,
  spinner,
  setSpinner,
  detailesData,
  setDetailesData,
}) => {
  const [booksData, setBooksData] = useState([]);
  const [searchData, setSearchData] = useState("");

  // todo useeffect______________________________________________________________________________________________________________________________________

  useEffect(getBookData, []);

  // todo add______________________________________________________________________________________________________________________________________

  function addBook(i) {
    const copyBookData = [...booksData];
    const temp = [...radingList];
    temp.push(copyBookData[i]);
    setReadingList(temp);
  }

  // todo shorten description/better splice______________________________________________________________________________________________________________________________________
  // function shortenDescription(i) {
  //   const copyBookData = [...booksData];
  //   console.log(copyBookData[i].description.length);
  //   if (copyBookData[i].description.length > 200) {
  //     console.log("less than 200");
  //   }
  //   console.log("good");
  // }
  // todo desc to detailes______________________________________________________________________________________________________________________________________

  // todo api______________________________________________________________________________________________________________________________________

  function getBookData() {
    var options = {
      method: "GET",
      url: "https://bookshelves.p.rapidapi.com/books",
      headers: {
        "x-rapidapi-host": "bookshelves.p.rapidapi.com",
        "x-rapidapi-key": "77fbd7db71msh8c38b479ce50f7bp12e063jsn167a312c8692",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // setSpinerLoding("y is loading....");
        setBooksData(response.data.Books);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .then(function (response) {
        setSpinner(false);
      });
  }
  // todo search+jsx______________________________________________________________________________________________________________________________________
  return (
    <div>
      {detailesData ? <Redirect to="/Detailes" /> : ""};
      <input
        className="divInput"
        type="text"
        placeholder="search"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <br />
      {booksData
        .filter((book) => {
          if (searchData === "") {
            return book;
          } else if (
            book.title.toLowerCase().includes(searchData.toLowerCase()) ||
            book.author.toLowerCase().includes(searchData.toLowerCase()) ||
            book.description.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return book;
          }
        })
        .map((book, i) => {
          if (book.id < 10) {
            // console.log();
            return (
              <div key={i}>
                {/* -------------------------------------------------------------------------- */}
                <button className="divInputAdd" onClick={() => addBook(i)}>
                  add
                </button>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Discription</th>
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
                          console.log({ book });
                        }}
                      >
                        {book.description.slice(0, 300)}...
                      </td>
                      <td>
                        {" "}
                        <img src={book.imgUrl} />
                      </td>
                    </tr>
                  </tbody>
                </Table>

    
                {/* ---------------------------------------------------------------------------------------------- */}
                {/* <li>{book.id}</li>
                <li>{book.title}</li>
                <li>{book.author}</li>
                <li
                  onClick={() => {
                    // let bookDetailes={id:book.id,title:book.title,img:book.imgUrl}
                    // book.title,book.id,book.author,book.description,
                    setDetailesData(book);
                    console.log({ book });
                    // console.log({bookDetailes});
                  }}
                >
                  {book.description.slice(0, 300)}...
                </li>
                <li>
                  <img src={book.imgUrl} />
                </li> */}
                {/* ---------------------------------------------------------------------------------------------- */}
              </div>
            );
          }
        })}
    </div>
  );
};
export default BookList;
