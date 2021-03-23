import React, {useState, useEffect} from 'react';
import './App.css';

const Title = ({ text }) => {
  return <h1 className="title">{ text }</h1>;
};


const AllUsers = ({users}) => {
 console.log({users});
  return (
    <>
    <h2>All Users (By ID)</h2>
    <div>
      {users.map((user) => (
        <div key='users-view'>ID: {user.id}<br/>
        First Name: {user.firstName} <br/>
        </div>

      ))}
      </div>
      </>
  );
};

const initialState = {
  firstName: "",  
  lastName: "",
  email: "",
  favorites: [],
};

const UserForm = ({ submitUser }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "setFirstName":
        return {...state, firstName: action.value };
      case "setLastName":
        return {...state, lastName: action.value };
      case "setEmail":
        return {...state, email: action.value };
      case "setFavorites":
        return {...state, favorites: action.value };
      case "saveUser":
        submitUser(state);
        // reset form
        return initialState;      
      default:
        return state;
    }
  }
  console.log("re-rendering, current state is", state);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      >
       <div
        style={{
          paddingBottom:'20px',
        }}
        >
          <label>First Name:
            <input
              name="firstName"
              value={state.firstName}
              onChange={(e) => {
                dispatch({ type: "setFirstName", value: e.target.value });
                console.log('this is the onchange')
              }}
              />
          </label>
       </div> 
       <div
        style={{
          paddingBottom:'20px',
        }}
        >
         <label>Last Name:
           <input
             name="lastName"
             value={state.lastName}
             onChange={(e) => {
               dispatch({ type:"setLastName",
              value: e.target.value });
             }}
             />
           </label> 
        </div>
        <div
          style={{
            paddingBottom:'20px',
          }}
        >
          <label>Email address:
            <input 
            name="email"
            value={state.email}
            onChange={(e) => {
              dispatch({ type:"setEmail", 
              value: e.target.value });
            }}
            /></label>
        </div>
        <div>
        <button onClick={() => dispatch({ type: 'saveUser'})}>Save</button>

        </div>
      </form>
    );
  };
function Users() {
  const [users, setUsers] = useState([]);
  const submitUser = (user) => {
    fetch('http://localhost:9000/users', {
      method:'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => console.log('Creating user succeeded', res))
    .then (() => setUsers([...users, user]))
  }

  function callAPI() {
    fetch('http://localhost:9000/users')
      .then((res) => res.text())
      .then((res) => setUsers([...JSON.parse(res), ...users]))
      .catch((err) => err);
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h1>
        <Title text='Add User' />
        </h1>
      <div className="add-users">
        <UserForm submitUser={submitUser} />
      </div>
      <h2>
        <Title text="All Users" />
        </h2>
      <div className="all-users">
        <AllUsers users={users} />
      </div>
    </>
  );
}



export default Users;
