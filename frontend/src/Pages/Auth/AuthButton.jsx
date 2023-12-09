import React from "react";
import "./AuthButton.css";
import Google from "../../assets/google-color-svgrepo-com.svg"
import Github from "../../assets/github-svgrepo-com.svg"
import Facebook from "../../assets/facebook-1-svgrepo-com.svg"
function AuthButton() {
  const headlyGoole = () => {
    alert("Please enter headlyGoole")
  };
  const headlyGithub = () => {
    alert("Please enter headlyGithub")
  };
  const headlyFacebook = () => {
    alert("Please enter headlyFacebook")
  };

  return (
    <div className="container-btn">
      <button type="button" style={{backgroundColor:"#ffff",color:"black",}} className="handle-auto-btn" onClick={headlyGoole}>
      <img src={Google} className="btn-svg"/> Log in Google
      </button>
      <button
        type="button"
        style={{backgroundColor:"black", color:"#ffff"}}
        className="handle-auto-btn"
        onClick={headlyGithub}
        >
        <img src={Github}  className="btn-svg"/> Log in Github
      </button>
      <button
        type="button"
        style={{backgroundColor:"#0d8bf0", color:"#ffff" }}
        className="handle-auto-btn"
        onClick={headlyFacebook}>
        <img src={Facebook} className="btn-svg"/> Log in Facebook
      </button>
    </div>
  );
}

export default AuthButton;
