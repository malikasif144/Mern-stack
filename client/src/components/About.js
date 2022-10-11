import React, { useEffect } from "react";
import Profile from "../images/profile.png";
import { useNavigate } from "react-router-dom";

const About = () => {
let navigate = useNavigate();
const callAboutPage = async () => {
  try{

    const token = window.localStorage.getItem('token')
    const res = await fetch("/about",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({token}),
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);
    if(res.status !== 200){
      const error = new Error(res.error);
      throw error;

    }

  }catch (err){
    console.log(err);
    navigate("/login")
  }

}

  useEffect(()=>{
    callAboutPage();

  },[])

  return (
    <div className="container">
      <form className="mt-5 shadow p-3 mb-5 bg-body rounded" method="GET">
        <div className="row">
          <div className="col-md-4">
            <img
              src={Profile}
              style={{ width: "250px", height: "400px" }}
              alt="/"
            />
          </div>
          <div className="col-md-6">
            <div>
              <h5>Full Name</h5>
              <h5>Profession</h5>
              <p className="mb-3 mt-5">
                RANKING:<span>1/10</span>
              </p>
              {/* <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" id="home-tab" data-toggle="tab" href="#home" role="tab">
                    About
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" id="profile-tab" data-toggle="tab" href="#profile" role="tab">
                  TimeLine
                  </a>
                </li>
              </ul> */}
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>12382911</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Admewdioee</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Dev</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Work</label>
                    </div>
                    <div className="col-md-6">
                      <p>mkfemcomp</p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  <p>
                    lkjrencqbreiucqiureqciureiuvciureviucnk nkdnqncoiewhjoiqfjcn
                    uqvorehqovhov fjkinbvoure
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="edit-profile"
              value="edit profile"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>WORK LINK</p>
            <a href="#">YouTube</a>
            <br />
            <a href="#">Instagram</a>
            <br />
            <a href="#">Facebook</a>
            <br />
            <a href="#">Twitter</a>
            <br />
          </div>

          {/* <div className="col-md-8">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                   <p>12382911</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                   <p>Admewdioee</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                   <p>Web Dev</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Work</label>
                  </div>
                  <div className="col-md-6">
                   <p>mkfemcomp</p>
                  </div>
                </div>

              </div>

            </div>





           
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default About;
