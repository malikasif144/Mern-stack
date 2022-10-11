import React,{useState} from "react";
import Sign from "../images/signup.png";
import { NavLink,useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const[user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""

  })
  let name,value
  const handleInput = (e) => {
    name = e.target.name;
     value = e.target.value;
      setUser({...user, [name]:value})
  }
  const postData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
      
    });
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }else {
      window.alert("Registration Successfull")
      console.log("Registration Successfull")

      navigate("/login")
    }

  }
  return (
    <div>
      <section className="signup" style={{ width: "100%", height: "100%" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-6">
            <h2 className="form-title mt-5">Signup</h2>
            <form className="registration-form" method="POST">
              <div>
                <label htmlFor="name">
                  <i class="fa-solid fa-user"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Your Name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">
                  <i class="fa-solid fa-envelope"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="number">
                  <i class="fa-solid fa-phone"></i>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Your Phone"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="work">
                  <i class="fa-solid fa-briefcase"></i>
                </label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="Your Profession"
                  value={user.work}
                  onChange={handleInput}
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
                  autoComplete="off"
                  placeholder="Your password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="cpassword">
                  <i class="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Your Cpassword"
                  value={user.cpassword}
                  onChange={handleInput}
                />
              </div>
              <button className="btn btn-primary mt-4" onClick={postData} type="submit">
                Register
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-6">
            <figure>
              <img className="sign-image mt-5" src={Sign} />
            </figure>
            <NavLink to="/login">I am already registered</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
