import React from 'react';
import logo from './logo.svg'; // save for future icon design
import './App.css';
import TextField from '@material-ui/core/TextField'; 
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import Checkbox from '@material-ui/core/Checkbox'; 
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'; 
import CheckBoxIcon from '@material-ui/icons/CheckBox'; 

{ /* For Checkboxes */ }
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />; 
const checkedIcon = <CheckBoxIcon fontSize="small" />; 
  
const Title = props => (
  <h1 className="title">{props.text}</h1>
);

const AllEvents = props => (
<p>All Events should go here!</p>
);

const Categories = () => { 
  
  // Our sample dropdown options 
  const options = ['Live Entertainment', 'Amusement/Fairs/Festivals', 'Charitable Cause',  
  'Performing Arts (Theatre)', 'Educational', 'Conference'] 
  
  return ( 
    <div style={{ paddingBottom: "20px", marginLeft: '40%', marginTop: '60px' }}> 
      <p>Categories</p> 
      <Autocomplete 
        multiple 
        id="checkboxes-tags-demo"
        options={options} 
        renderOption={(option, { selected }) => ( 
          <React.Fragment> 
            <Checkbox 
              icon={icon} 
              checkedIcon={checkedIcon} 
              style={{ marginRight: 8 }} 
              checked={selected} 
            /> 
            {option} 
          </React.Fragment> 
        )} 
        style={{ width: 500 }} 
        renderInput={(params) => ( 
          <TextField {...params} variant="outlined"
            label="Categories"
            placeholder="Check all that apply" /> 
        )} 
      /> 
    </div> 
  ); 
} 

const EventForm = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [eventStartDate, setEventStartDate] = React.useState("{/* today?? */}");
  const [eventEndDate, setEventEndDate] = React.useState("{/* today?? */}");
  const [categories, setCategories] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = () => {
    console.log({ name, description, eventStartDate, eventEndDate, categories, address });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div style={{ paddingBottom: "20px" }}>
          <label>
            Event Name:
            <input
              name="eventName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <label>
            Event Description:
            <textarea
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <label>
            Event Start Date:
            <input
              type="date"
              value={eventStartDate}
              onChange={(e) => {
                setEventStartDate(e.target.value);
              }}
            />
          </label>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <label>
            Event End Date:
            <input
              type="date"
              value={eventEndDate}
              onChange={(e) => {
                setEventEndDate(e.target.value);
              }}
            />
          </label>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <label>
            Address:
            <textarea
              name="eventAddress"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
        </div>

        <Categories />


        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>

  );
};

function Events() {
  return (
    <>
    <Title text="Add An Event" />
    <div className="add-events">
      <EventForm />
    </div>

        <Title text="All Events" />
        <div className="all-events">
          <AllEvents />
        </div>
      </>
  );
};

export default Events;
