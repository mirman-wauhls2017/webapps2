# 6: From Dusk 'Til Done
Now that we have our server-side (backend) code working, and our REST API (the `GET`, `POST`, `PUT`, and `DELETE` components), it's time to build the client-side (frontend) of our app.

This is Web Apps II, so of course the user interface of our application will be written using HTML and CSS. The logic governing the app's behavior will be written in JavaScript.

It's worth nothing that this "one language everywhere" situation isn't always the case. Many apps' server components are written in other languages. In case you're curious, here's a quick rundown of popular "web frameworks" in different languages:

* [Rails](http://rubyonrails.org/) (Ruby)
* [Sinatra](http://www.sinatrarb.com/) (Ruby)
* [Django](https://www.djangoproject.com/) (Python)
* [Flask](http://flask.pocoo.org/) (Python)
* [Revel](https://revel.github.io/) (Go)

Each one has different strengths and weaknesses. We've chosen to use Node/Express so we work in JavaScript in the front and back.

## Data Flow
It's always helpful to visualize how information is going to flow through our app. Remember **CRUD**?

### Create
Our app has to have some form to create new todos. That information has to be sent to the backend via a `POST` request to create the new todos.

### Retrieve
When the app loads, we have to `GET` the list of todos and display each one. We'll have to `GET` every time a new todo is added, so our list remains updated.

### Update
Todos need to be editable: marked done, details changed. Every time we hit save on a todo, we need to `PUT` the changes. And yes, `GET` the updated set of todos.

### Delete
Somehow, we have to delete our todos. And guess what? After we `DELETE`, yep, we `GET` the updated list.

You might ask:

> Why on earth are we `GET`ting all the time when we can just change the array locally on the front end?

In the old days, that might be a good idea. But nowadays, apps run on many devices, and we want to make sure that we get _all_ the changes on the server into our frontend. Imagine someone making todos on their computer and their phone. We want the latest from all data sources.

## 
