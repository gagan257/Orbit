import React from "react";

export default function cardLayout(props) {
  return (
    <div>
      <div className="card">
        <img src="/" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.course_name}</h5>
          <p className="card-text">{props.course_description}</p>
          <a href="/" className="btn btn-primary">
            View Course
          </a>
        </div>
      </div>
    </div>
  );
}
