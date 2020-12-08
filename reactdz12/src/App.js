import './App.css';
import Example1 from './Example1';
import React from 'react';
import Example2 from './Example2';

function App() {
  let info = {
    name: "Markos",
    city: "Kiviy Rih",
    number: "0960288929",
    workExp: 2,
    email: "markosbasilio17@gmail.com",
    photo: 'logo512.png',
    skills:["C#","ASP.NET","HTML/CSS","javascript","EF6","typescript"] 
  }
  let pet={
    name: "computer",
    kind: "machine",
    age: 2,
    efficiency: 99
  }
  return (
    <div>
      <Example1 info={info}></Example1>
      <hr></hr>
      <Example2 pet={pet}></Example2>
    </div>
  );
}

export default App;
