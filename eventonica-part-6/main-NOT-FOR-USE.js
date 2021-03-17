/**
 * Add all your DOM event handlers and other UI code in this file.
 */



document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();
  // Refreshes Events
  // Builds HTML list for all event. You must call this function after you change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li>${event.name} #${event.id} Date: ${event.date} Category: ${event.category}</li>`)
      .join("\n");
    console.log("Added event", Event.all);

  };

  // Adds Events
  const addEventForm = document.querySelector("#add-event");
  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const date = document.querySelector("#add-event-date").value;
    const category = document.querySelector("#add-event-category").value;
    // debugger;
    const event = app.addEvent(name, date, category);
    refreshEventsList();
    addEventForm.reset();

  });

  // Refreshes Users
  const refreshUserList = () => {
    document.querySelector("#users-list").innerHTML = User.all
      .map((user) => `<li>${user.name} #${user.id}</li>`)
      .join("\n");
  };

  // Adds Users
  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("submit", (submitUser) => {
    submitUser.preventDefault();
    const userName = document.querySelector("#add-username").value;
    const user = app.addUser(userName);
    console.log("Added user", user);
    refreshUserList();
    addUserForm.reset();
  });

  // Deletes Events
  const delEventForm = document.querySelector("#delete-event");
  delEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const delEvent = parseInt(document.querySelector("#delete-event-id").value);
    app.deleteEvent(delEvent);
    console.log("Deleted event");
    refreshEventsList();
    delEventForm.reset();
  });

  // Deletes Users
  const delUserForm = document.querySelector("#delete-user");
  delUserForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const delUser = parseInt(document.querySelector("#delete-user-id").value);
    app.deleteUser(delUser);
    console.log("Deleted event");
    refreshUserList();
    delUserForm.reset();
  });

  // Finds Events by date
  const findEventByDateForm = document.querySelector("#search-by-date");
  findEventByDateForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const date = document.querySelector("#search-event-date").value;
    const eventByDate = app.findEventsByDate(date);
    // findEventForm.reset();
    const returnDateSearch = () => {
      document.querySelector("#found-events-by-date").innerHTML = eventByDate
        .map((event) => `<li>${event.name} #${event.id} Date: ${event.date} Category: ${event.category}</li>`)
        .join("\n");

    };
    returnDateSearch();
  });

  // Finds Events by category
  const findEventByCategoryForm = document.querySelector("#search-by-category");
  findEventByCategoryForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    console.log("submitted " + submitEvent);
    const category = document.querySelector("#search-event-category").value;
    const eventByCategory = app.findEventsByCategory(category);
    // findEventForm.reset();
    const returnCategorySearch = () => {
      document.querySelector("#found-events-by-category").innerHTML = eventByCategory
        .map((event) => `<li>${event.name} #${event.id} Date: ${event.date} Category: ${event.category}</li>`)
        .join("\n");

    };
    returnCategorySearch();
  });


});