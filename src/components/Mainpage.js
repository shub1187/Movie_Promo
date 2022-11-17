// importing all the basic stuff
import React from "react";
import { useEffect, useState } from "react";
import "./Mainpage.css";
import axios from "axios"; // to make API call
import Modal from "react-bootstrap/Modal";
import { BiCameraMovie } from "react-icons/bi";
import Rates from "./Rate"; // to show rating stars in UI

// Creating main function
function Mainpage() {
  const [chardata, setCharData] = useState([]); // used to store the character data
  const [filmdata, setFilmData] = useState({});  // Used to store the series data
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const getData = async () => {  // Making an get api call to fetch data 
    let response = await axios.get("https://demo.tech2edge.co/samples/data-sg");
    setCharData(response.data.characters); // Storing response data as per our requirement
    setFilmData(response.data.series); // Storing response data as per our requirement
  };

  useEffect(() => {  
    getData(); // Calling getData function only once whenever page loads
  }, []);
  const handleClose = () => { // Modal functions bootstarp
    setShow(false);
  };
  const handleShow = (e) => { // passing the index number  of character via e that the user has clicked on UI
    setShow(true);
    // console.log(e);
    setIndex(e); // setting the index number of character that needs to be showcased in Modal UI
  };

  return (
    <div>
      {chardata[index] !== undefined && (  // Conditional rendering of Modal component initially the there will be no data 
        <Modal show={show} onHide={handleClose} id="modal">
          <Modal.Header id="modal-header">
            <img
              id="modal-img"
              src={`https://demo.tech2edge.co/samples/${chardata[index].img}`}  // image URL
              alt="pic"
            />
          </Modal.Header>
          <Modal.Body id="modal-body">
            <strong style={{ fontSize: "40px" }}>{chardata[index].name}</strong>
            <br />
            Age : {chardata[index].age}
            <br />
            Profession : {chardata[index].profession}
          </Modal.Body>
        </Modal>
      )}
      <div id="Outer">
        <div id="Navbar">
          <span id="icon">
            <BiCameraMovie style={{ fontSize: "40px" }} />
          </span>
          <span>My_Show</span>
        </div>
        <div id="Cover">
          <img
            id="cover-img"
            src={`https://demo.tech2edge.co/samples/${filmdata.img}`}
            alt="pic"
          />
          <p id="Ratings">Ratings</p>
          <span>
            {" "}
            <Rates />
          </span>
        </div>
        <div id="Card-div">
          {chardata.map((value, i) => {
            return (
              <div
                id="card"
                onClick={() => {
                  handleShow(i); // passing argument that is index number of user in each card
                }}
              >
                <img
                  id="card-img"
                  src={`https://demo.tech2edge.co/samples/${value.img}`}
                  alt="pic"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
