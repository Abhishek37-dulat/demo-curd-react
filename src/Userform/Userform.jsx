import React from "react";
import "./Userform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Userform = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    course: "",
  });

  const handleonChange = (e) => {
    e.preventDefault();
    setDetails((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const onsubmit = (e) => {
    e.preventDefault();

    const user = {
      name: details.name,
      email: details.email,
      phone: details.phone,
      password: details.password,
      course: details.course,
    };
    console.log(user);
    axios
      .post("http://localhost:5126/", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setDetails({
      name: "",
      email: "",
      phone: "",
      password: "",
      course: "",
    });
    navigate("/");
  };

  console.log(details);

  return (
    <div className="userform">
      <form onSubmit={onsubmit}>
        <div className="u-title">
          <p>User Details</p>
        </div>
        <div className="u-name">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={details.name}
            onChange={(e) => handleonChange(e)}
          />
        </div>
        <div className="u-email">
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={details.email}
            onChange={(e) => handleonChange(e)}
          />
        </div>
        <div className="u-phone">
          <input
            type="text"
            placeholder="Enter your phone"
            name="phone"
            value={details.phone}
            onChange={(e) => handleonChange(e)}
          />
        </div>
        <div className="u-password">
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            value={details.password}
            onChange={(e) => handleonChange(e)}
          />
        </div>

        <div className="c-names">
          <p>Courses</p>
          <select
            value={details.course}
            name="course"
            onChange={(e) => handleonChange(e)}
          >
            <option value="MBA">None</option>
            <option value="MBA">MBA</option>
            <option value="MTech">M.Tech</option>
            <option value="BTech">B.Tech</option>
          </select>
        </div>
        <div className="u-button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Userform;
