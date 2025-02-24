
# Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

## Notes and next steps

- The concurrently package has been added to be able to run multiple commands at once, in this case 'yarn server' and 'next dev'.
- Add E2E testing for critical user journeys, such as rendering a 404 page when the product is not found.
- The app is prepared to use environment variables, but a hardcoded URL for GraphQL has been used to make reviewing easier.
- Make product id dynamic. Instead of being a hardcoded value, the product id will be obtained through the context in getStaticProps.
- Implement internationalisation to allow for content translation (multiple packages help with this, such as i18next).
- Add Sentry configuration to monitor the app.
- Add Jitsu or Google Analytics to gather user metrics.
