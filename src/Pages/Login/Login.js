import React from "react";
import Person from "@material-ui/icons/Person";

const Login = () => {
  return (
    <div className="row" style={{ placeContent: "center" }}>
      <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="container bg-dark p-3">
          <div className="d-flex justify-content-between">
              <Person className="text-info" />
              <div className="text-center h6 text-uppercase">login now</div>
          </div>
          <hr />
          <form action="#">
            <div>
              <label htmlFor="username" className="text-capitalize">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                className="form-control"
                required
              />
            </div>
            <hr />
            <div>
              <label htmlFor="password" className="text-capitalize">
                password
              </label>
              <input
                type="text"
                placeholder="Password"
                name="password"
                id="password"
                className="form-control"
                required
              />
            </div>
            <hr />
            <div>
              <input
                type="submit"
                name="submit"
                id="submit"
                className="btn form-control"
                style={{ backgroundColor: "#FC01CE" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
