const express = require('express');
const { I_LOVE } = require('./config');

// import addEvent from './models.js';
// const models = require('./models.js');
// const eventonica = models.Eventonica();
const { User, Event, sky } = require('./models.js');
// const eventonica = new Eventonica(); 

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// to do: create a directory in eventonica called "server" and all server-related files should go there, and create another called "app". models --> server. 

app.listen(port, () => {
  console.log(`Server running port ${port}...`)
})

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.route('/events').get((req, res) => {
  res.send(Event.all);
  console.log(Event.all);
})

// add a new event
.post((req, res) => {
  let newEvent = req.body;
  Event.all.push(newEvent);
  res.status(200).send(Event.all);
  
});

// http://localhost:3000/events/100 returns the event with the specific id
app.route('/events/:id').get((req, res) => 
{ 
  let event_id = req.params.id;
  console.log(event_id, Event);
  let status = 400;
  let response = "Unable to fetch data!";
  Event.all.forEach((event) => {
    if (event['id'] == event_id) {
      res.status(200).send(event);
    }
  })
});

// get all users 
app.route('/users').get((req, res) => {
  res.send(User.all);
})

// add a new user, and return all users
.post((req, res) => {
  let newUser = req.body;
  User.all.push(newUser);
  res.status(200).send(User.all);
});

// http://localhost:3000/users/200 gets user with specific id
app.route('/users/:id').get((req, res) => 
{ 
  let user_id = req.params.id;
  let status = 400;
  let response = "Unable to fetch data!";
  User.all.forEach((user) => {
    if (user['id'] == user_id) {
      res.status(200).send(user);
    }
  })
});


// get specific user 
app.route('/sky').get((req, res) => {
  res.send(sky);
});

console.log("I love ", I_LOVE);


// 
