## quotes-post
For this exercise, you'll use a form to create a new quote.

- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
- Add code in `server.js` that will display the phrase "Hello, Quote!"
- Visit [`localhost:8000/`](http://localhost:8000/) and confirm that "Hello, Quote!" is displayed.
- Add and commit.

- Add a route called `/quotes` with the `GET` method. As its response, serve `form.html`. You'll have to create this file and give the form two text input fields: `quote` and `author`.
- Visit [`localhost:8000/quotes`](http://localhost:8000/quotes) and confirm that the form is being rendered.
- Add and commit.

- When a form is submitted, it should be routed to `/quotes` with a method of POST. In this method, the new quote should be pushed as an object to an array named `data`. 
- After the quote is saved, a user should be redirected to a path including `/posts` and the index number of the new quote, such as `/posts/1`. This route needs to be created (below)!

- Add a route called `/quotes/:id` with the method GET and have it display the most recently added quote.
- Visit [`localhost:8000/posts/1`](http://localhost:8000/posts/1) and confirm that the newest post is being displayed
- Add and commit.

- Add a route called `/quotes` with a method of GET and have it display all the quotes stored in `data`.
- Visit [`localhost:8000/posts`](http://localhost:8000/posts) and confirm that all posts are being displayed.
- Add and commit.
