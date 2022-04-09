import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const Header = () => {
  const handleSearch = () => {
    swal({
      text: 'Search for Product".',
      content: "input",
      button: {
        text: "Search",
        closeModal: false,
      },
    })
      .then((name) => {
        // eslint-disable-next-line no-throw-literal
        if (!name) throw null;

        return fetch(`#`);
      })
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const product = json.results;

        if (!product) {
          return swal("No Product was found!");
        }
      })
      .catch((err) => {
        if (err) {
          swal("Oh noes!", "request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="logo">
              <img className="mw-100" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-lg-9 d-flex align-items-center justify-content-end">
            <nav>
              <ul className="menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/products"}>Product</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/accaunt"}>
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
                <li
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </li>
                <li>
                  <Link to={"/login"}>Log in</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
