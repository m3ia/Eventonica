import React, { useEffect, useState } from 'react';
import './App.css';

const Title = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};


const AllEvents = ({events}) => { 
  console.log('hiii', events);
  if (events.length === 0) { return null; }
  const EventItem = (event) => (
    <div key={event.name}>
      Name: {event.name}
    </div>

  )
  return (
    <>
    <p> All Events should go here! </p>
    <div>
      {events.map((event) => (EventItem(event)))}
      </div>
      </>
  );
};

const initialState = {
  name: "",  
  description: "",
  eventStartDate: "",
  eventEndDate: "",
  category: "",
  address: "",
};

const EventForm = ({ submitEvent }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);


  function reducer(state, action) {
    switch (action.type) {
      case "setName":
        return {...state, name: action.value };
      case "setDescription":
        return {...state, description: action.value };
      case "setEventStartDate":
        return {...state, eventStartDate: action.value };
      case "setEventEndDate":
        return {...state, eventEndDate: action.value };
      case "setCategory":
        return {...state, category: action.value };
      case "setAddress":
        return {...state, address: action.value };
      case "saveEvent":
        submitEvent(state);
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
            paddingBottom: '20px',
          }}
        >
          <label>Event Name:
            <input
              name="eventName"
              value={state.name}
              onChange={(e) => {
                dispatch({ type: "setName", value: e.target.value });
              }}
            />
          </label>
        </div>
        <div
          style={{
            paddingBottom: '20px',
          }}
        >
          <label>Event Description:
            <textarea
              name="description"
              value={state.description}
              onChange={(e) => {
                dispatch({ type: "setDescription", value: e.target.value });
              }}
            />
          </label>
        </div>
        <div
          style={{
            paddingBottom: '20px',
          }}
        >
          <label>Event Start Date:
            <input
              type="date"
              value={state.eventStartDate}
              onChange={(e) => {
                dispatch({ type: "setEventStartDate", value: e.target.value });

              }}
            />
          </label>
        </div>
        <div
          style={{
            paddingBottom: '20px',
          }}
        >
          <label>Event End Date:
            <input
              type="date"
              value={state.eventEndDate}
              onChange={(e) => {
                dispatch({ type: "setEventEndDate", value: e.target.value });

              }}
            />
          </label>
        </div>
        <div
          style={{
            paddingBottom: '20px',
          }}
        >
          <label>
            Address:
            <textarea
              name="eventAddress"
              value={state.address}
              onChange={(e) => {
                dispatch({ type: "setAddress", value: e.target.value });

              }}
            />
          </label>
        </div>
        <div
          style={{
            paddingBottom: '20px'          
          }}
        >
        <label>Category:
          <select id="category" name="category" 
            value={state.category} 
            onChange={ (e) => { dispatch({ type: "setCategory", value: e.target.value }); } } >
            <option value="Live Entertainment">Live Entertainment</option>
            <option value="Charitable Event">Charitable Event</option>
            <option value="Educational">Educational</option>
            <option value="Festival">Festival</option>
            <option value="Community">Community</option>
          </select>
          </label>
        </div>
        <div>
        <button onClick={() => dispatch({ type: 'saveEvent'})}>Save</button>

        </div>
      </form>
    );
  };

function Events() {
  // add a useState for the list of events
  // pass the "setEvents" down to "EventForm"
  // in EventForm, on submit, use setEvents
  // to update the list of events
  // to AllEvents (below), pass the list of events
  const [events, setEvents] = useState([]);
  const submitEvent = (event) => {
    
    setEvents([...events, event]);
  }
  
  const [apiResponse, setAPIResponse] = useState('');

  function callAPI() {
    fetch('http://localhost:9000/events')
      .then((res) => res.text())
      .then((res) => setAPIResponse(JSON.parse(res)))
      .catch((err) => err);
  }

  useEffect(() => {
    callAPI();
  }, []);
  console.log(apiResponse);
  return (
    <>
      <h1>
        <Title text='Add An Event' />
      </h1>
      <div className="add-events">
        <EventForm submitEvent={submitEvent}/>
      </div>
      <h2>
        <Title text='All Events' />
      </h2>
      <div className="all-events">
        <AllEvents events={apiResponse} />
      </div>
    </>
  );
}

export default Events;
