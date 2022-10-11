import React , {useState} from "react";
import login from "../images/login.png";
import { NavLink ,useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const loginUser = async (e) => {
    e.preventDefault();
     const res = await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
     })
     const data =await res.json();
     window.localStorage.setItem('token',token);
     debugger;
     if(data.status === 422 || !data){
      console.log("Invalid credentails");
      window.alert("Invalid Credentails")
     }else {
      console.log("Lodin Successfully");
      window.alert("login Successfully");
      navigate("/")
     }
  }
  return (
    <div>
      <section className="signup" style={{ width: "100%", height: "100%" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-6">
            <figure>
              <img className="sign-image mt-5" src={login} />
            </figure>
            <NavLink to="/registration">Create An Account</NavLink>
          </div>
          <div className="col-12 col-sm-6">
            <h2 className="form-title mt-5">Login</h2>
            <form className="registration-form" method="POST">
              <div>
                <label htmlFor="name">
                  <i class="fa-solid fa-envelope"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={ (e) => {setEmail(e.target.value)}}
                  autoComplete="off"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="password">
                  <i class="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={ (e) =>{setPassword(e.target.value)}}
                  autoComplete="off"
                  placeholder="Your password"
                />
              </div>
              <button className="btn btn-primary mt-4" type="submit" onClick={loginUser}>
                login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
