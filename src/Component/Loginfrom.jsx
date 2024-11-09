import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";
import { useState } from "react";

const Loginfrom = () => {
  const provider = new GoogleAuthProvider();
  const [name, setName] = useState(null);
  const loginwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setName(result.user);
      })
      .catch((error) => {
        console.log("Error page", error);
        setName(null);
      });
  };

  const Signoutbtin = () => {
    signOut(auth).then(() => {
      console.log("Sign Out Done");
      setName(null);
    });
  };
  const githubprovider = new GithubAuthProvider();
  const loginwithGithub = () => {
    signInWithPopup(auth, githubprovider)
      .then((result) => {
        console.log(result.user);
        setName(result.user);
      })
      .catch((error) => {
        console.log("Error page", error);
        setName(null);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {name ? (
                <div onClick={Signoutbtin} className="mt-4 btn btn-warning">
                  Sign Out
                </div>
              ) : (
                <>
                  <div
                    onClick={loginwithgoogle}
                    className="mt-4 btn btn-warning"
                  >
                    Login With Google
                  </div>
                  <div
                    onClick={loginwithGithub}
                    className="mt-4 btn btn-warning"
                  >
                    Login With Github
                  </div>
                </>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              {name && (
                <div>
                  <h1 className="text-xl font-bold">
                    Name :{name.displayName}
                  </h1>
                  ;<h1 className="text-xl font-bold"> Email :{name.email}</h1>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginfrom;
