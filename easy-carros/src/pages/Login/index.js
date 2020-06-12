import React, { useState } from "react";

// Components
import Warning from "../../components/Warning";

// Style
import "./style.scss";

// Assets
import logo from "../../assets/img/logo-easy-carros.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [valid, setValid] = useState(null);

  function access(e) {
    e.preventDefault();
    if (email === "" || pass === "") {
      warningMsg('appear');
			setMessage("All fields are required");
			
      return false;
		}
		
		if(valid){
			if(email === "frontend-dev@easycarros.com" && pass === "Fr0nt3ndR0ck5!"){
				console.log(valid)
				console.log('pode logar')
				// api call here
				
			}
		}
		
  }

  function validateEmail(email) {
    const validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return validate.test(email);
  }

  function validateInputs(e) {
		const id = e.target.id;
		warningMsg('out');
    id === "email" ? setEmail(e.target.value) : setPassword(e.target.value);

    if (!validateEmail(email)) {
      warningMsg('appear');
			setMessage("Please, type a valid email");
			setValid(false)
			return false
		}
		
		setValid(true)
	}
	
	function warningMsg(state){
		if(state === 'appear'){
			document.querySelector(".warning-msg").classList.add("warning-msg-show");
			return
		}
    document.querySelector(".warning-msg").classList.remove("warning-msg-show");
	}

  return (
    <div className="container-fluid">
      <div className="row">
        <section
          className="login d-flex justify-content-center align-items-center flex-column"
          id="login"
        >
          <header>
            <img src={logo} alt="" />
          </header>
          <form>
            <div className="form-group mb-0">
              <input
                onKeyUp={validateInputs}
                onBlur={validateInputs}
                onFocus={validateInputs}
                autoComplete="new-password"
                type="email"
                className="text-white form-control email"
                id="email"
                aria-describedby="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                onKeyUp={validateInputs}
                autoComplete="new-password"
                type="text"
                className="text-white form-control password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              onClick={access}
              type="submit"
              className="btn btn-outline-light btn-login"
            >
              Login
              <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </button>
          </form>

          <Warning message={message} />
        </section>
      </div>
    </div>
  );
};

export default Login;
