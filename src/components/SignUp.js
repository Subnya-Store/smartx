import axios from "axios";
import React, { useState } from "react";
import apiUrl from "../../redux/services/api";
import authActions from "../../redux/actions/auth";
const { fetchSignup } = authActions;

export default function SignUp({ setState }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [refferal, setRefferal] = useState("");
  const [phone, setPhone] = useState("");



  const register = (e) => {
    e.preventDefault();
    
    fetchSignup(
      {
        username: username,
        password: password,
      },
      "/register"
    )
  };
  return (
    <div className="bg-bgprimary rounded-lg shadow-2xl flex flex-col">
      <div className="bg-[#7a494907] rounded-lg shadow-2xl container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-[#7a494907] rounded-lg shadow-2xl px-6 py-8 text-black w-full">
          <h1 className="mb-8 text-3xl text-primary text-center">Sign up</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="border border-grey-light w-full p-3 rounded-lg mb-4 shadow-lg focus:shadow-md focus:shadow-primary"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="block border border-grey-light w-full p-3 rounded-lg mb-4 shadow-lg focus:shadow-md focus:shadow-primary"
            name="email"
            placeholder="Email address"
          />
          <input
            onChange={(e) => setRefferal(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded-lg mb-4 shadow-lg focus:shadow-md focus:shadow-primary"
            name="refferal"
            placeholder="Refferal id"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            className="block border border-grey-light w-full p-3 rounded-lg mb-4 shadow-lg focus:shadow-md focus:shadow-primary"
            name="phone"
            placeholder="Phone no."
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded-lg mb-4 shadow-lg focus:shadow-md focus:shadow-primary"
            name="password"
            placeholder="Password"
          />
          {/* <input
            type="password"
            className="block border focus:border-primary focus:outline-secondary border-grey-light w-full p-3 rounded-lg mb-4 shadow-md focus:shadow-lg focus:shadow-primary"
            name="confirm_password"
            placeholder="Confirm Password"
          /> */}

          <button
            onClick={(e) => register(e)}
            className="w-full text-center py-3 rounded bg-primary text-texting hover:bg-primary focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <button
            onClick={() => setState(1)}
            className="text-primary hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out cursor-pointer"
          >
            Log in
          </button>
          .
        </div>
      </div>
    </div>
  );
}
