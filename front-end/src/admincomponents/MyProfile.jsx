import React from "react";

import "../style/style1.css";
import person from "../images/person.jpg";
import { BiBook } from "react-icons/bi";
import ProfileHeader from "./ProfileHeader";

const courses = [
  {
    title: "HTML CSS",
    duration: "2 hours",
    icon: <BiBook />,
  },
  {
    title: "Javascript",
    duration: "2 hours",
    icon: <BiBook />,
  },
  {
    title: "React JS",
    duration: "2 hours",
    icon: <BiBook />,
  },
];

const MyProfile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={person} alt="" />
          <h3 className="username">Admin</h3>
          <span className="profession">admin@gmail.com</span>
        </div>
        <div className="user--courses">
          {courses.map((courses) => (
            <div className="course">
              <div className="course--detail">
                <div className="course--cover">{courses.icon}</div>
                <div className="course--name">
                  <h5 className="title">{courses.title}</h5>
                  <span className="duration">{courses.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
