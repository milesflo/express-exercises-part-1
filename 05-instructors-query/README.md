# instructors-query
For this exercise, you'll work with query strings to greet a people.

## Set-up
- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
- Add code in `server.js` that will display the phrase "Hello, Query!"
- Visit [`localhost:8000/`](http://localhost:8000/) and confirm that the phrase is displayed in the response body.
- Add and commit.

- Create a route `/instructors`. This route should display all the objects in `data` in the file `server.js`.
- Add and commit.

- When a user visits the route `/instructors?given-name=rosa`, the object with Rosa should be displayed.
- Add and commit.

- When a user visits the route `/instructors?surname=desai`, the object with Zubair should be displayed.
- Add and commit.

- When a user visits the route `/instructors?sex=male`, the object with Cho, Zubair, and Tyler should be displayed.
- Add and commit.

- Refactor your code to greet any instructor by their give-name, surname, or sex. You should need only one route to to achieve this goal.
- Add and commit
