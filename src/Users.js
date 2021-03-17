import React from 'react';
// import logo from './logo.svg'; // save for future icon design
import './App.css';

const Title = props => (
  <h1 className="title">{props.text}</h1>
);

const AllUsers = props => (
<p>All Users should go here!</p>
);


function Users() {
  return (
      <>
        <Title text="All Users" />
        <div className="all-users">
          <AllUsers />
        </div>
      </>
  );
}

export default Users;
