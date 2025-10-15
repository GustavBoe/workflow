# Workflow repo for the CA

This is a course assignement for the Workflow course. The project is made to practice the use of tools such as: EsLint, Prettier, Husky, Vite and Playwright.

## Getting Started

### Install dependencies

npm install

### Running the project

npm run dev

### Running tests

**For unit tests**

npm run unit

**For end to end tests**

npm run e2e // Runs "npx playwright test"

npm run e2e:ui // Runs "npx playwright test --ui"

npm run e2e:headed //Runs "npx playwright test --headed"

npm run e2e:debug //Runs "npx playwright test --debug"

## Environment Variables

This project uses environment variables. Create a .env file in the root of your project with the following format:

TEST_USER_EMAIL=your-user-email-here
TEST_USER_PASSWORD=your-password-here

## Available Scripts

- `npm run dev` - Start development server
- `npm run unit` - Runs Vitest
- `npm run e2e` - Runs playwright
- `npm e2e:ui` - Runs playwright in UI mode
- `npm e2e:headed` - Runs playwright and shows the browser while testing
- `npm e2e:debug` - Runs playwright in debugging mode
- `npm run start` or `npm start` - opens a preview with live server

## Technologies used

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Vitest
- Playwright

## Author

**GustavBoe**
