# Suryansh Agrawal - Modern Portfolio

A complete production-ready, highly interactive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber (@react-three/drei)
- **Icons**: Lucide React / FontAwesome
- **Scrolling**: React-Scroll

## Features
- Deep dark/classy theme out of the box.
- Floating 3D shapes and interactive particle background.
- Fully typed data structures.
- Timeline layouts for Experience and Education.
- Form validation simulation.
- Component-driven architecture.

## Installation & Running Locally

1. **Navigate to the client directory**:
   ```bash
   cd client
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment
This project is Vite-based and highly optimized, making it extremely easy to deploy on modern platforms.

### Vercel
1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. Set the Root Directory to `client` if your Vite app is inside the `client` folder.
5. Vercel will automatically detect Vite and set the build command to `npm run build` and output directory to `dist`.
6. Click **Deploy**.

### Netlify
1. Push your code to a GitHub repository.
2. Log into [Netlify](https://netlify.com/) and click "Add new site" -> "Import an existing project".
3. Select your GitHub repository.
4. Set the Base directory to `client`.
5. Set Build command to `npm run build`.
6. Set Publish directory to `client/dist`.
7. Click **Deploy site**.
