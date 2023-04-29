import "../stylesheets/NavBar.css";
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

function NavBar() {
  const handleModal = () => {
    isOpenModal ? setIsOpenModal(false) : setIsOpenModal(true);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  if (isOpenModal) {
    return (
      <div className="navContainer">
        <div className="logoContainer">
          <p className="logo">COUNTRY FINDER</p>
        </div>
        <div className="infoContainer">
          <BsFillInfoCircleFill size="1.5em" color="#000" />
        </div>
        <div className="modal">
          <span className="info">
            <p>
              Create by <strong>Juan Zabala</strong>
            </p>
            <p>Public API from:</p>
            <a href="https://restcountries.com/" target="_blank">
              Rest Countries
            </a>
            <p>Developed in React.js</p>
          </span>
          <button onClick={handleModal} className="buttonClose" type="button">
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navContainer">
        <div className="logoContainer">
          <p className="logo">COUNTRY FINDER</p>
        </div>
        <div onClick={handleModal} className="infoContainer">
          <BsFillInfoCircleFill size="1.5em" color="#000" />
        </div>
      </div>
    );
  }
}

export default NavBar;
