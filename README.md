# feast-it-test

### How to run locally

1) In the root of the repository, `yarn start` is sufficient to install dependencies, build and start the project.
2) You can then visit `http://localhost:5000` to see the application and Graph can be queried directly at `http://localhost:5000/graphql`

### Deployment

I chose to deploy the site using Heroku as this is a tool I'm familiar with, it's accessible at: http://warm-sierra-56371.herokuapp.com/

### Justifications

- I chose to structure this as a mono repo but with split dependencies/linting, that way they can be split easily in the future whilst allowing for easier deployment / testing for the purposes of this interview test.
- I decided to go with GraphQL as this is something I have been actively trying to gain more expose to recently, I think it's a fantastic tool and will likely take over in the future.
- Styled-components was used on the frontend as I'm a big fan of how it allows you to keep styles as close to components as possible. 
