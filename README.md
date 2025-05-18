## Getting started

First you'll need to install your dependencies with yarn:

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

## Notes

- The concurrently package has been added to be able to run multiple commands at once, in this case 'yarn server' and 'next dev'.
- The app is prepared to use environment variables, but a hardcoded URL for GraphQL has been used to make reviewing easier.

## ToDos:

- Create a reusable Text component.
- Add test for editing a review path.
- Add E2E testing for critical user journeys, such as rendering a 404 page when the product is not found.
- Make product id dynamic. Instead of being a hardcoded value, the product id will be obtained through the context in getStaticProps.
- Implement internationalisation to allow for content translation (multiple packages help with this, such as i18next).
- Add Sentry configuration to monitor the app.
- Add Jitsu or Google Analytics to gather user metrics.
