
import React from "react";
import "./App.css";

// Student Component
function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Student ID: {props.id}</p>
      <p>Course: {props.course}</p>
      <p>Attendance: {props.attendance}%</p>
    </div>
  );
}

// Main Component
function App() {
  return (
    <div className="container">
      <h1>Student Attendance Tracker</h1>

      <Student
        name="Tanuja"
        id="101"
        course="ECE"
        attendance="85"
      />

      <Student
        name="Rithu"
        id="102"
        course="CSE"
        attendance="92"
      />

      <Student
        name="Kiran"
        id="103"
        course="EEE"
        attendance="78"
      />
    </div>
  );
}

export default App;
