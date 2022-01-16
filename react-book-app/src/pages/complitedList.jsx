import { Redirect } from "react-router-dom";
import Rating from "../components/Rating";
import Detailes from "./Detailes";

const ComplitedList = ({
  complitedList,
  setComplitedList,
  detailesData,
  setDetailesData,
}) => {
  function deleteItem(i) {
    const copyComplitedList = [...complitedList];
    copyComplitedList.splice(i, 1);
    console.log("deleteded on complited", complitedList);
    setComplitedList(copyComplitedList);
  }
  return (
    <div>
      {detailesData ? <Redirect to="/Detailes" /> : ""}
      {complitedList.map((complited, i) => {
        return (
          <div key={i}>
            <button onClick={() => deleteItem(i)}>delete</button>
            <Rating />
            <li>{complited.id}</li>
            <li>{complited.title}</li>
            <li>{complited.author}</li>
            <li
              onClick={() => {
                setDetailesData(complited);
              }}
            >
              {complited.description.slice(0, 300)}...
            </li>
            <img src={complited.imgUrl} />

            <textarea placeholder="notes"  />
          </div>
        );
      })}
    </div>
  );
};

export default ComplitedList;
