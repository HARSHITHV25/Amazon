import { auth, provider } from "./firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
// haaaa@gmail.com
// lolololol
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    setPassword("");
    setEmail("");
  };
  const google = async (e) => {
    e.preventDefault();

    await auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.credentrial));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="yourpassword@1234567890"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id=""
            required
          />

          <button type="submit" onClick={signIn} className="login__signin">
            Sign In
          </button>
          <p>
            <center>OR</center>
          </p>
        </form>
        <button className="google continue" onClick={google} type="submit">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />{" "}
          <span className="span">Continue with Google</span>
        </button>
        <p>
          <strong>
            <em>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </em>
          </strong>
        </p>
        <button
          type="submit"
          onClick={signUp}
          className="login__registerButton"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
