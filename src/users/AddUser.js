import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmi̇t = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/user", user);
      navigate("/");
    } catch (e) {
      setError(e.response.data);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3  border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add User</h2>

          {error ? (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            ""
          )}

          <form onSubmit={(e) => onSubmi̇t(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                id="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Save
            </button>

            <Link to="/" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
