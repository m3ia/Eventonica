import React from 'react';
import logo from './logo.svg'; // save for future icon design
import './App.css';

const Title = props => (
  <h1 className="title">{props.text}</h1>
);

const AllEvents = props => (
<p>All Events should go here!</p>
);


function Events() {
  return (
      <>
        <Title text="All Events" />
        <div className="all-events">
          <AllEvents />
        </div>
      </>
  );
}


export default Events;