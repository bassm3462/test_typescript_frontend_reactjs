import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADDuser } from "../../Redux/auth/authAction";
import { Link } from "react-router-dom";
function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");

  const dispatch = useDispatch();

  const handlSubmit = (
    e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const formData: FormData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    dispatch(ADDuser(formData));
  };
  return (
    <>
      {/* Section: Design Block */}
      <section className="text-center text-lg-start">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  ",
          }}
        />
        {/* Jumbotron */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Register now</h2>
                  <form onSubmit={(e) => handlSubmit(e)}>
                    {/* email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        email
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                    {/* Checkbox */}

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onSubmit={(e) => handlSubmit(e)}
                    >
                      Register
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:<Link to ="/">login</Link></p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Register;
