import React from "react";

export default function Example1(props) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img src={props.info.photo} style={{width:"100%"}} className="card-img-top" alt="img"></img>
      <div className="card-body">
        <h5 className="card-title">{props.info.name}</h5>
        <b className="card-text mb-0">Skills:</b>
        <p className="card-text">{props.info.skills.map(item=>item+', ')}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Email:</b> {props.info.email}</li>
        <li className="list-group-item"><b>Phone N:</b> {props.info.number}</li>
        <li className="list-group-item"><b>City:</b> {props.info.city}</li>
        <li className="list-group-item"><b>Work Exp:</b> {props.info.workExp}</li>
      </ul>
    </div>
  );
}
