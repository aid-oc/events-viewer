# feast-it-test

### How to run locally

1) In the root of the repository, `yarn start` is sufficient to install dependencies, build and start the project.
2) You can then visit `http://localhost:5000` to see the application and Graph can be queried directly at `http://localhost:5000/graphql`

### Deployment

* I chose to deploy the site using Heroku as this is a tool I'm familiar with, it's accessible at: http://warm-sierra-56371.herokuapp.com/
* The database is deployed with MongoDB cloud, the connection string is sourced from a `.env`  file which was commited purely for demo reasons, in a real environment sensitive information would be pulled from a secure key store.

### Functionality

1) See all events held in the database, along with the person who submitted it, referenced as the 'Poster' in the codebase.
2) Filter events by a search term, this is flexible and will filter based on any poster/event content.
3) Choose to hide/show cancelled events via the checkbox located below the search box.
4) Delete cancelled events via the 'Delete (Actually)' button. Caution here as the deletion will remove it from the live db and so it may be a good to test last.
5) UI has been tested on both Mobile & Desktop, although simple - it will make adjustments to improve UX in both environments.

### Justifications

- I chose to structure this as a mono repo but with split dependencies/linting, that way they can be split easily in the future whilst allowing for easier deployment / testing for the purposes of this interview test.
- I decided to go with GraphQL as this is something I have been actively trying to gain more expose to recently, I think it's a fantastic tool and will likely take over in the future.
- Styled-components was used on the frontend as I'm a big fan of how it allows you to keep styles as close to components as possible. 
