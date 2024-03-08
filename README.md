# Frontend project

The project is live and can be experienced at:
[the-redux-ecom-store.netlify.app/](https://the-redux-ecom-store.netlify.app/)

### To run this project locally:

1. Fork and / or clone this repo.
1. Run `npm i`
1. Run `npm run build`
1. Run `npm start`

## Usage

This application is a user-friendly, interactive web shop built with React and TypeScript, Redux and RTK for state management, react-hook-forms for form handling, and MUI for styling.

When you first land on the site, you'll be greeted with a clean, modern interface that's designed with a light theme by default.

As you explore the application, you'll find various functionalities depending on the specific purpose of the app. These range from browsing the shop's content, interacting with your preferred products in the shopping cart, to signing into your user profile.

This application is designed to be responsive, providing an optimal viewing experience on all devices and screen sizes.

## Architecture & Design

### Routing

This project follows a modular structure, organized around the concept of pages, each representing a distinct part of the application. The file pagesData.tsx is a central hub for routing configuration, defining the paths and associated components for each route in the application.

The project is divided into several key pages, each with its own dedicated components.
Each Page component represents a unique view within the application.

The routes in the application are categorized into three groups:

- publicRoutes,
- protectedRoutes,
- protectedAdminRoutes.

This structure allows for clear separation of public-facing pages, pages that require user authentication, and pages that require admin privileges.

### State Management

The application uses Redux for state management, with the RTK Query library for asynchronous data fetching.

### Authentication

In this application, authentication is handled using a combination of React, Redux, and React Router. The RequireAuth component is a key part of this process. It's a higher-order component that wraps around other components or pages that require user authentication.

The RequireAuth component uses the useAppSelector hook to access the Redux store and retrieve the current user's authentication token. This token is stored in the Redux store when the user logs in, and it's used to authenticate subsequent requests made by the user.

If the user is authenticated (i.e., they have a valid token), the RequireAuth component renders the Outlet component. If the user is not authenticated, the RequireAuth component redirects the user to the login page.

The authApiSlice.ts file is a crucial part of the authentication process in this application. It uses Redux Toolkit's createApi and injectEndpoints methods to define API endpoints for login, registration, fetching user profile, and refreshing access tokens.

The login endpoint accepts login credentials (usually a username and password), sends a POST request to the /auth/login endpoint on the server, and expects a response containing the user's session data.

The getUserWithSession endpoint sends a GET request to the /auth/profile endpoint to fetch the profile of the currently authenticated user. This is typically used to check if the user's session is still valid when they revisit the application.

The getNewAccessToken endpoint accepts a refresh token, sends it to the /auth/refresh-token endpoint, and expects a new access token in response. This is used to get a new access token when the current one expires.

The authActions.ts file, which defines several Redux Thunk actions related to authentication. These actions are dispatched in response to user interactions, such as logging in or logging out, and they perform side effects like interacting with the local storage and dispatching other actions.
