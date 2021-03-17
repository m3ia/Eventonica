/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */

// const user_Name = document.getElementById("add-username").value;

class Event {
  static all = [
   {
    category: "Charity",
    date: "2021-02-24",
    id: 100,
    name: "adsf"
  },

  {
    category: "Amusement/Fairs/Festivals",
    date: "2021-02-26",
    id: 101,
    name: "asdfasdf"
  }
  ];
  static _nextId = 100;

  constructor(name, date, category) {
    this.name = name;
    this.id = Event._nextId++;
    this.date = date;
    this.category = category; // entertainment? public? food? 

    Event.all.push(this); // keep track of all created instances

  }

  static findByDate(date) {
    //need to declare a searchDate var
    // searches over constructor objects for events that have dates that occur on this set date. 
    return Event.all.filter(event => event.date === date);
  }

  static findByCategory(category) {
    // searches for events that check a category array for each event object for the selected category
    return Event.all.filter(event => event.category === category);
  }
}

class User {
  static all = [
    { name: 'meia',
      id: 200,
      favorites: []
    }, 
    { name: 'danielle', 
      id: 201,
      favorites: []
    }
  ];
  static _nextId = 200;

  constructor(name) {
    this.name = name;
    this.id = User._nextId++;
    this.favorites = [];
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }
  

  //add favorite function, collection
  favorite () {
    
  }

}

class Eventonica {
  addEvent(name, date, category) {
    // have a field for each piece of input
    // create a function so user can enter input
    // create a submit button. onlick, will erase everything, parse all input, and enter it into an object for the user.
    //maybe first checks to see if the user is signed in or needs to sign up for an account? 

    // Adds a new Event

    new Event(name, date, category);

  }

  updateEvent(id, targetProp, newProp) {
    // user can view their events and click a button to edit all input.
    // upon clicking submit, new info will replace the old.
    // user should be given option to cancel editing without submitting changes. 

    // Update existing Event
    // change property to a new property 
    
    Event.all.find(event => event.id === id);
    Event.targetProp = newProp.value //need to check this 

  }

  deleteEvent(id) {
    // user can click a button. an alert will confirm with the user that they want to delete the event. once deleted, the info for that object will be removed. 
    // Deletes Event
    Event.all = Event.all.filter(event => event.id !== id);
  }

  findEventsByDate(date) { // seems like duplicate in class Event
    // user will be able to enter a starting date and an ending date; 
    // user will be given results of events that fall between those dates.
    // Return items in Event.all with a specified date
    
    return Event.all.filter(event => event.date === date);
  }

  findEventsByCategory(category) { // seems like duplicate in class Event
    // user will be able to view different categories --mapped to event property. upon clicking one, all events tagged in that category will be viewable in a list. all events will be actionable.
    // try using strings to store the categories to place within an array or array of objects? 
    // Return items in Event.all with a specified category
    // have something that iterates over each checkbox rather than creating a variable for each.
    return Event.all.filter(event => event.category === category);
  }

  addUser(name) {
    new User(name);
    // a user will be able to view and click a sign-up button and enter their info: name, email, password. user key will be generated via a private api. user info will be stored.
    // Adds a new User

  }

  updateUser(id, newName) {
    // user will be able to edit info, such as email, name, and password. might require some confirmation actions. 
    // Update existing User
    User.all.find(user => user.id === id).name = newName;
  }

  deleteUser(id) {
    // user will be able to view an option to delete their account in an account page. once deleted, user info can be deleted and unaccessable unless user wants to sign up again, 
    // Deletes User
    User.all = User.all.filter(user => user.id !== id);

  }
}

let sky = new User('sky');

if (typeof module !== "undefined") {
  module.exports = {
    Eventonica,
    User,
    Event, 
    sky
  };
}

