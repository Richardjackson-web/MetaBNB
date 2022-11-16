import React from "react";
import { Link } from "react-router-dom";
import Error from "../../assets/images/error404.jpg";

const ErrorPage = () => {
  return (
    <div
      className="container text-center"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1
        className="text-primary"
        style={{ fontSize: "8rem", fontWeight: "800" }}>
        Oops!
      </h1>
      <h1 style={{ fontWeight: "700" }}>404 - PAGE NOT FOUND</h1>
      <p className="p-3">
        Yeah, we are confused as you are, you took the wrong turn 
        and came here. Luckily unlike some mistakes, you can fix this.
      </p>
      <Link to={"/"}>
        <button
          className=" text-primary"
          style={{ padding: ".7rem 1.3rem", borderRadius: "20px" }}>
          GO TO HOMEPAGE
        </button>
      </Link>
      <img style={{width:"300px"}} src={Error}/>
    </div>
  );
};

export default ErrorPage;
