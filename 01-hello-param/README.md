## hello-param
For this exercise, you'll greet a person (or thing) using a parameter.

## Set-up
- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
- Add code in `server.js` that will display the phrase `Hello, Express!`
- Start your server (`nodemon server.js`).
- Visit [`localhost:8000/`](http://localhost:8000/express) and confirm that `Hello, Express!` is displayed in the response body. __Notice that the word Express is capitalized__.
- Add and commit.

- Add a route with your first name (`/cho`). When a user visits this route, the response body should display the the phrase "Hello, Cho!"
- Kill your server (`control + c`).
- Start your server (`nodemon server.js`).
- Visit [`localhost:8000/`](http://localhost:8000/cho) and confirm that the correct phrase is displayed. __Notice that the name is capitalized__.
- Add and commit.

- Add a route with the name of your favorite celebrity (`tom-hanks`).
- Visit [`localhost:8000/tom-hanks`](http://localhost:8000/tom-hanks) and confirm that the phrase is displayed. __Notice that the hyphen is removed and each word is capitalized__.
- Add and commit.

- Refactor your code to remove the three hard-coded routes (`/express`, `/your-name`, and `/celebrity-name`) and use in its place one route with a parameter.
- Add and commit.
