import React from "react";
// import banner from "./assets/images/banner.jpg";
import "./welcome.css"
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="text-center p-5 bg">
      <h1 className="m-5">MATT-TV</h1>
      {/* <footer className="footer-bottom">
        <span className="">Copyright 2022 @ IDOKO MATTHEW ITEM</span>
      </footer> */}
      <div className="container mt-5">
        <button className="btn btn-success text-capitalize" onClick={() => history.push("/comedy")}>Enjoy comedy videos</button>
        <hr />
        <p className="text-capitalize">welcome to our awesome videos websiste. we bring you exclusive movie and comedy videos. Feel free to explore my page.</p>
        <hr />
        <div class="card text-white bg-default">
          <div class="card-body">
            <a href="https://youtube.com/channel/UCKDJ1dGcerJRmlRDSbysN9w" className="m-2 btn btn-danger text-decoration-none">YOUTUBE</a>
            <a href="https://www.facebook.com/profile.php?id=100087515694356&mibextid=ZbWKwL" className="m-2 btn btn-primary text-decoration-none">FACEBOOK</a>
            <a href="#" className="m-2 btn btn-success text-decoration-none">WHATSAPP</a>
            <a href="#" className="m-2 btn btn-warning text-decoration-none">INSTAGRAM</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Welcome;
