import React from 'react';

export default function Example2(props){
    return (
        <div class="card" style={{width: "18rem"}}>
  <div class="card-header">
    My Favorite Pet
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Name:</b> {props.pet.name}</li>
    <li class="list-group-item"><b>Kind:</b> {props.pet.kind}</li>
    <li class="list-group-item"><b>Age:</b> {props.pet.age}</li>
    <li class="list-group-item"><b>КПД:</b> {props.pet.efficiency}</li>
  </ul>
</div>
    )
}