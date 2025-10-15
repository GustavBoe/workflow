# Workflow repo for the CA

This is a course assignement for the Workflow course. The project is made to practice the use of tools such as: EsLint, Prettier, Husky, Vite and Playwright.

## Getting Started

### Install dependencies

npm install

### Running the project

npm run dev

npm run prepare

### Running tests

**For unit tests**

npm run unit

**For end to end tests**

npm run e2e //Runs "npx playwright test"

npm run e2e:ui // Runs "npx playwright test --ui"

npm run e2e:headed //Runs "npx playwright test --headed"

npm run e2e:debug //Runs "npx playwright test --debug"

npm run start // Runs "live-server --port=5500"

## Environment Variables

This project uses environment variables. Create a .env file in the root of your project with the following format:
