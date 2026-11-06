# Dynamic Routing Blog Application

## About the Project

This is a simple blog application built with React, TypeScript, and React Router.

The project demonstrates how to create dynamic routes, navigate between pages, and protect pages using authentication context.

## Features

- Display a list of blog posts.
- Navigate to individual blog posts using dynamic URLs.
- Use React Router for page navigation.
- Login and logout functionality using Context API.
- Protect the Admin Dashboard from unauthenticated users.
- Redirect users to the Login page when they try to access protected pages.
- Display a 404 page for unknown routes.
- Redirect the home page to the Blog page.

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- Context API
- CSS

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd lab-4-dynamic-routing
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Learning Outcomes

Through this project, I practiced:

- Setting up BrowserRouter.
- Creating routes with Route and Routes.
- Navigating with Link.
- Reading dynamic URL parameters using useParams.
- Managing authentication state with Context API.
- Creating protected routes using Navigate.
- Handling unknown routes with a wildcard route.