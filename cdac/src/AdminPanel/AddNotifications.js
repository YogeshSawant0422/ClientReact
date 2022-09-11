import React from "react";
import "../Dashboard/AdminDashboard.css";
import "../AdminPanel/style.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Axios from 'axios';
import { NavLink } from "react-router-dom";

  function AddNotifications() {

    const navigate = useNavigate();

    // const [notice, setUser] = useState({
    //    notice:""
    // });

    // let name, value;
    // const handleInputs = (e) => {
    //   name = e.target.name;
    //   value = e.target.value;

    //   setUser({ ...notice, [name]: value });
    // }

    // //Sending Data To Backend 
    // const PostData = async (e) => {
    //   e.preventDefault();
     
    //   const { notice } = notice;

    //   const res = await fetch("/addNotice", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type" : "applocation/json"
    //     },
    //     body: JSON.stringify({
    //       notice  
    //     })
    //   });

    //   const data = await res.json();

    //   if (data.status === 422 || !data) {
    //     window.alert("Invalid Data");
    //     console.log("Inalid Data");
    //   } else {
    //     window.alert("Add Successfull");
    //     console.log("Add Successfull");

    //     navigate('/AdminDashboard');
    //   }
    // }

    const url = "/addNotice";
    const [data, setData] = useState({
      notice: ""
    })

    function submit(e) {
      e.preventDefault();
      Axios.post(url, {
        notice:data.notice
      }).then(res => {
        console.log(res.data)
      })

      navigate('/AdminDashboard');
    }
  
    function handleInputs(e) {
      const newdata = { ...data }
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata);
    }

  return (
    <React.Fragment>
      <div class="container-fluid">
        <div class="row">
        <div class="col-sm-auto bg-light sticky-top">
            <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
              {/* <a
                href="!#"
                class="d-block p-3 link-dark text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
              ></a> */}
              <NavLink
                to="/adminDashboard"
                style={{textDecoration:"none",margin:"10px",color:"black"}}
              >
                 <h4>Admin Dashboard</h4>
              </NavLink>
              
              <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                <li class="nav-item"></li>
                <li>
                  <NavLink
                    to="/addNewStudent"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Dashboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-person-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    <p>Add New Student</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                   to="/addNewTeacher"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Dashboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-person-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    <p>Add New Teacher</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addNotifications"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                    <p>Add Notifications</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/viewNotification"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-list-ul"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      />
                    </svg>
                    <p>View Notifications</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addMarks"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-file-earmark-medical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg>
                    <p>Add Marks</p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-sm p-3 min-vh-100 CenterLogo"
            style={{ backgroundColor: "#1C8EF9" }}
          >
            <div class="card">
              <h3 class="card-header">Add Notification</h3>
              <div class="card-body">
                <div class="card-body AuthorData">
                  <h5 class="card-title">Notification Details</h5>
                <form method="POST" onSubmit={(e)=> submit(e)}>
                  <div class="card" style={{ width: "60rem" }}>
                    <div class="card-body">
                      <div style={{ padding: "5px" }}>
                        <div className="row">
                          <div>
                            <label
                              for="Note"
                              class="form-label"
                            >
                              Enter Notice Here : 
                            </label>
                              <textarea
                                onChange={(e)=>handleInputs(e)}
                              class="form-control"
                                id="notice"
                                value={data.notice}
                              rows="3"
                              placeholder="Write Here"
                          
                            ></textarea>
                          </div>
                        </div>
                        <div className="row">
                          <div class="col-md-12">
                            <button
                              type="submit"
                              class="btn btn-primary"
                                style={{ marginTop: "10px" }}
                                value=""
                            >Publish Notice</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddNotifications;
