import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

import AuthImg from "../../assets/authentication.svg";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsSHown] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/dashboard");
    } else {
      /*===== FOCUS =====*/
      const inputs = document.querySelectorAll(".form__input");

      /*=== To call function===*/
      inputs.forEach((input) => {
        input.addEventListener("focus", addfocus);
        input.addEventListener("blur", remfocus);
      });
    }
    // eslint-disable-next-line
  }, []);

  /*=== Add focus ===*/
  function addfocus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  /*=== Remove focus ===*/
  function remfocus() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  const register = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    // API Call
    const response = await fetch("http://localhost:8181/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      // Redirect to home page
      navigate("/dashboard");
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          toast.error(error.msg);
        }
      } else {
        toast.error(json.error);
      }
    }
    setIsLoading(false);
  };
  return (
    <>
      <Helmet>
        <title>Signup | Convin</title>
        <meta
          name="description"
          content="Convin. Login to your Dashboard and access your files from here."
        />
      </Helmet>
      <div className="l-form">
        <div className="shape1"></div>
        <div className="shape2"></div>

        <div className="form">
          <img src={AuthImg} alt="" className="form__img" />
          <div className="hero-circle4">
            <svg
              viewBox="0 0 1194 1192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <circle
                  cx="596"
                  cy="596"
                  r="594.5"
                  stroke="url(#paint0_linear_1147_785)"
                  stroke-width="3"
                ></circle>
                <circle
                  cx="64"
                  cy="335"
                  r="10"
                  fill="url(#paint1_linear_1147_785)"
                ></circle>
                <circle
                  cx="187"
                  cy="1029"
                  r="10"
                  fill="url(#paint2_linear_1147_785)"
                ></circle>
                <circle
                  cx="1184"
                  cy="684"
                  r="10"
                  fill="url(#paint3_linear_1147_785)"
                ></circle>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1147_785"
                  x1="27.8649"
                  y1="603.544"
                  x2="1201.29"
                  y2="603.544"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1147_785"
                  x1="54.4675"
                  y1="335.127"
                  x2="74.1558"
                  y2="335.127"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1147_785"
                  x1="177.468"
                  y1="1029.13"
                  x2="197.156"
                  y2="1029.13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1147_785"
                  x1="1174.47"
                  y1="684.127"
                  x2="1194.16"
                  y2="684.127"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="hero-circle5">
            <svg
              viewBox="0 0 1194 1192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <circle
                  cx="596"
                  cy="596"
                  r="594.5"
                  stroke="url(#paint0_linear_1147_785)"
                  stroke-width="3"
                ></circle>
                <circle
                  cx="64"
                  cy="335"
                  r="10"
                  fill="url(#paint1_linear_1147_785)"
                ></circle>
                <circle
                  cx="187"
                  cy="1029"
                  r="10"
                  fill="url(#paint2_linear_1147_785)"
                ></circle>
                <circle
                  cx="1184"
                  cy="684"
                  r="10"
                  fill="url(#paint3_linear_1147_785)"
                ></circle>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1147_785"
                  x1="27.8649"
                  y1="603.544"
                  x2="1201.29"
                  y2="603.544"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1147_785"
                  x1="54.4675"
                  y1="335.127"
                  x2="74.1558"
                  y2="335.127"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1147_785"
                  x1="177.468"
                  y1="1029.13"
                  x2="197.156"
                  y2="1029.13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1147_785"
                  x1="1174.47"
                  y1="684.127"
                  x2="1194.16"
                  y2="684.127"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4CA5FF"></stop>
                  <stop offset="1" stop-color="#B673F8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <form
            className="form__content"
            id="signup-form"
            method="POST"
            onSubmit={register}
          >
            
            <h1 className="form__title">Register</h1>

            <div className="form__div form__div-one">
              <div className="form__icon">
                <i className="fa-regular fa-envelope"></i>
              </div>

              <div className="form__div-input ">
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form__input"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="form__div form__div-one">
              <div className="form__icon">
                <i className="fa-regular fa-circle-user"></i>
              </div>

              <div className="form__div-input">
                <input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form__input"
                  id="username"
                  name="username"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="form__div">
              <div className="form__icon">
                <i className="fa-solid fa-lock"></i>
              </div>

              <div className="form__div-input">
                <input
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={isShown ? "text" : "password"}
                  name="password"
                  className="form__input"
                  id="password"
                />
                <span
                  style={{
                    marginLeft: "100%",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <i
                    className={
                      isShown ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                    }
                    onClick={togglePassword}
                  ></i>
                </span>
              </div>
            </div>
            <br></br>
            {!isLoading && (
              <button type="submit" className="form__button">
                Register
              </button>
            )}
            {isLoading && (
              <button
                type="submit"
                className="form__button"
                style={{ backgroundColor: "#15203a", cursor: "not-allowed" }}
                disabled={true}
              >
                <span className="loader"></span>
              </button>
            )}

            <div style={{ marginBottom: "25px", textAlign: "center" }}>
              Already have an account ?{" "}
              <Link to={"/login"} style={{ color: "#969BA5" }}>
                Login here
              </Link>
            </div>
          </form>
        </div>
        <ToastContainer
          toastStyle={{ backgroundColor: "#202d40", color: "white" }}
        />
      </div>
    </>
  );
};

export default SignUp;
