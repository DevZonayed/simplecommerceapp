import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { sentusertolocal } from "../verify/Verify";
import "./Login.css";
const Login = () => {
  /**
   * This states for confirm user
   */
  const [isUser, setisUser] = useState(false);
  /**
   * This states for Send User data to localhost
   */
  const [usersend, setusersend] = useState();

  /**
   * This States for get value from Login Field
   */
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });
  /**
   * This function for login button effect
   * @param {*} e
   */
  //This script for redirect after login
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (isUser === true) {
      swal({
        title: "Login Approved",
        buttons: false,
        icon: "success",
        timer: 2000,
      });
      sentusertolocal("user", usersend);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      swal({
        title: "Please enter Valid Data",
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
  };

  /**
   * This function for password visibility
   */
  const [passType, setPassType] = useState("password");
  const [pastoggle, setPassToggle] = useState(false);
  const passvisibility = () => {
    setPassToggle((value) => !value);
  };
  useEffect(() => {
    if (pastoggle === true) {
      setPassType("text");
    } else {
      setPassType("password");
    }
  }, [pastoggle]);
  /**
   * This function for get data from server
   */
  useEffect(() => {
    axios
      .get(
        `http://localhost:5050/User?user=${userData.user}&password=${userData.password}`
      )
      .then((res) => {
        res.data.map((exatuser) => {
          if (
            exatuser.user === userData.user &&
            exatuser.password === userData.password
          ) {
            setisUser(true);
            setusersend(exatuser);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userData]);

  /**
   * Login Page JSX Start Here
   */
  return (
    <div>
      <div className="login-container">
        <div className="card lgoin-form shadow">
          <div className="card-header">
            <h2 className="text-center">Login</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="user my-3">
                <label htmlFor="username">Input Your Username</label>
                <input
                  value={userData.user}
                  onChange={(e) =>
                    setUserData({ ...userData, user: e.target.value })
                  }
                  id="username"
                  className="form-control form-control-sm"
                  type="text"
                />
              </div>
              <div className="password my-3">
                <label htmlFor="password">Input tour password</label>
                <input
                  onDoubleClick={passvisibility}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  id="password"
                  className="form-control form-control-sm"
                  type={passType}
                />
              </div>
              <div className="submit my-3">
                <input
                  className="btn btn-success w-100"
                  value="Login"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
