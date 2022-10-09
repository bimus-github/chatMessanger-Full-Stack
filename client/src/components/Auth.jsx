import React, { useState } from "react";
import Cookies from "universal-cookie";
import { postAuth } from "../actions/auth";
import { Form } from "../components";

import signinImage from "../assets/signup.jpg";

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    postAuth({ form, isSignup });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <Form
                name="fullName"
                type="text"
                placeholder="Full Name"
                setForm={setForm}
              />
            )}
            <Form
              name="username"
              type="text"
              placeholder="Username"
              setForm={setForm}
            />
            {isSignup && (
              <Form
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                setForm={setForm}
              />
            )}
            {isSignup && (
              <Form
                name="avatarURL"
                type="text"
                placeholder="Url Avatar"
                setForm={setForm}
              />
            )}
            <Form
              name="password"
              type="password"
              placeholder="Password"
              setForm={setForm}
            />
            {isSignup && (
              <Form
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                setForm={setForm}
              />
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
