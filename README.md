<h1 align="center">🚀 CodeSync 💻</h1>

# CodeSync - Real-Time Collaboration Coding Platform

CodeSync is a real-time collaboration coding platform designed to bring developers together to work on code in a synchronized and efficient manner. It enables multiple users to edit and run code simultaneously in a shared environment. Whether you're working on a project with teammates, learning with a tutor, or engaging in hackathons, CodeSync facilitates smooth real-time collaboration for coding sessions.

## Tech Stack

- **Next.js**: A powerful React framework for building fast, scalable web applications. It provides SSR (Server Side Rendering), API routes, and static site generation.
- **Convex**: A backend-as-a-service solution that simplifies database interactions, serverless functions, and real-time sync.
- **Clerk**: An authentication service to manage users, roles, and sessions with ease, providing secure login and signup processes.
- **Monaco Editor**: The same code editor used in Visual Studio Code, embedded in our platform for seamless coding experience with syntax highlighting, IntelliSense, and debugging.
- **PistonAPI**: A backend service that provides real-time execution of code in different programming languages, making it possible to run and test code instantly.
- **Liveblocks**: Enables real-time collaborative features, like syncing and sharing editor states, cursor positions, and changes in a collaborative environment.
- **Other Libraries/Technologies**:
  - **React**: For building dynamic user interfaces.
  - **WebSockets**: For real-time communication and collaboration between users.
  - **Tailwind CSS**: For modern, responsive, and customizable UI design.

## Features

- **Real-Time Collaboration**: CodeSync allows users to work together in real-time, making edits, reviewing code, and collaborating on problem-solving as a team.
- **Multi-Language Support**: With PistonAPI, users can write and run code in various languages, including Python, JavaScript, Java, C++, and more.
- **Version Control**: CodeSync tracks changes in the codebase, allowing users to see who made specific changes and revert if needed.
- **Live Code Sharing**: Share your coding environment with others via a live link for collaborative sessions.
- **Interactive Editor**: Monaco editor provides a powerful, familiar code-editing experience, including code completion, syntax highlighting, error highlighting, and more.
- **Authentication & User Management**: Clerk handles user authentication, account management, and secure logins for a seamless user experience.
- **Session Persistence**: Changes made to the code are automatically synced and saved in real-time, ensuring no work is lost.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/snjy-kumar/codesync.git
cd codesync
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup

You will need to set up some environment variables for the various services that CodeSync integrates with. Create a `.env.local` file in the root directory of the project and add the following variables:

### Setup .env file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

### Add these env to Convex Dashboard

```bash
CLERK_WEBHOOK_SECRET=
LEMON_SQUEEZY_WEBHOOK_SECRET=
```

Refer to the documentation for each respective service for how to generate these API keys and URLs.

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

This will launch the app at `http://localhost:3000`.

### 5. Deploying

For deployment, we recommend using Vercel, as it supports Next.js out of the box. You can also use other services like Netlify or DigitalOcean, but Vercel is optimized for Next.js.

1. Push your repository to GitHub (or another git provider).
2. Go to [Vercel](https://vercel.com/) and sign up/sign in.
3. Connect your GitHub repository to Vercel.
4. Follow the instructions to deploy the app.
5. Set your environment variables in the Vercel dashboard.

## How to Contribute

We welcome contributions to improve CodeSync! If you find any bugs, have feature requests, or want to add new features, feel free to fork the repository and create a pull request.

### Steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to your fork: `git push origin feature-name`
5. Create a pull request from your fork to the main repository.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) while contributing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Next.js**: For providing a powerful and flexible framework for building web applications.
- **Convex**: For providing a streamlined backend service that simplifies database interactions.
- **Clerk**: For offering a robust authentication solution.
- **Monaco Editor**: For providing a rich and extensible code editor.
- **Liveblocks**: For real-time collaborative features.
- **PistonAPI**: For enabling instant code execution in various languages.

---
