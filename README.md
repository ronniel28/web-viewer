# Web Viewer App

A simple and modern **React** application that allows users to view websites with features like dark mode, zoom functionality, and bookmarks. You can easily add and manage bookmarks, switch between light and dark themes, and zoom in/out of web pages.

## Features

- **Dark Mode**: Toggle between light and dark modes.
- **Zoom**: Zoom in and out on the webpage with adjustable zoom levels.
- **Bookmarks**: Save and access your favorite websites easily.
- **Fullscreen Mode**: Enter and exit fullscreen mode for an immersive experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: For styling React components with scoped CSS.
- **gh-pages**: For deploying the app to GitHub Pages.

## Live Demo

You can access the live demo of the Web Viewer app here:

[https://ronniel28.github.io/web-viewer](https://ronniel28.github.io/web-viewer)

## Building and Testing a Capacitor App on a Physical Device
To build and test a Capacitor app on a physical device, follow the process below:

### 1. Install Dependencies
Make sure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** for managing dependencies
- **Capacitor** and **CLI tools** installed:
  ```bash
  npm install --save @capacitor/core @capacitor/cli
  ```

- **Android Studio** (for Android) or **Xcode** (for iOS) for building and testing on physical devices.

### 2. Build the App
Navigate to your project directory where the Capacitor app is located and build it:

  ```bash
  npm run build

  ```

  This will generate the www folder with the web assets.

  ### 3. Add the Platform
For Android, run:

  ```bash
    npx cap add android
  ```

For iOS, run:

  ```bash
    npx cap add ios
  ```

   ### 4. Sync with Capacitor
    After adding the platform, sync your project to ensure the native code is up to date:
 ```bash
   npx cap sync
```

   ### 5. Open in the IDE
To test on a physical device, open the platform-specific project in Android Studio or Xcode:
For Android:

  ```bash
    npx cap open android
  ```

For iOS:

  ```bash
    npx cap open ios
  ```