import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./Login.css";
const Login = () => {
  const [isUser, setisUser] = useState(false);
  const [usersend, setusersend] = useState({
    mail: "",
  });
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (isUser === true) {
      swal("This is a valid user");
    } else {
      swal("Accaunt doesn't exits");
    }
  };

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
            setusersend({
              mail: exatuser.email,
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userData]);

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
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  id="password"
                  className="form-control form-control-sm"
                  type="text"
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
