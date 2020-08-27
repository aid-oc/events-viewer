# feast-it-test

### How to run locally

1) In the root of the repository, `yarn start` is sufficient to install dependencies, build and start the project.
2) You can then visit `http://localhost:5000` to see the application and Graph can be queried directly at `http://localhost:5000/graphql`

Otherwise, visit http://warm-sierra-56371.herokuapp.com/

### Testing

- Build both projects using `yarn heroku-postbuild` or `yarn start`
- Run `yarn test` to run both tests for both client and server (they can still be ran using `yarn test` in each respective subfolder)

Notes: 

Backend logic was tested using standalone Mongo tests (submission, retrieval) and a collection of integration tests. The integration tests configure the graph server to run against the testing mongo database and then executes queries after inserting data.

Frontend code has been tested using a reacting testing library and has focused heavily on snapshot tests. This was done as the majority of the components provide little interaction and so snapshoting the component content was enough to assert that they have displayed correctly.

More complex components (those which interact with graph) have either had their queries/mutations mocked using Apollo's `<MockedProvider />`, such is the case with `Event.test.jsx`. I chose to mock the dependencies with `<EventSection />` so that I can demonstrate the usage and abstract away the graph complexity as my goal with testing that component was to see how it reacts to different variants of `{ loading, error, data }`

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
- The database contains two collections (Posters, Events), an Event entry references a poster by ID so that a poster can produce multiple events but keep a single poster entry as the source of truth for contact information.
