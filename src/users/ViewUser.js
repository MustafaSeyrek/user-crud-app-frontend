import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/user/${id}`);
      setUser(result.data);
    } catch (e) {
      setError(e.response.data);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3  border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              {error ? (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                `Details of User id: ${id}`
              )}

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>

                <li className="list-group-item">
                  <b>Username: </b>
                  {user.username}
                </li>

                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
