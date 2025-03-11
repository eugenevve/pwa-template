# PWA-TEMPLATE

This project is a template with a customized PWA (Progressive Web App) mode of the site. It includes a customizable install button, support for various notifications for all types of browsers. It also displays a notification about the disconnection of the Internet connection.

Optimized favicon of the site, using a minimum number of files. To create such icons, you can use [Figma templates](https://www.figma.com/community/file/1380577671249157222/website-icon-adaptation).

For Apple devices, a splash screen has been created, which in turn is optimized for all screen sizes. And this splash screen is created automatically (you will not need to constantly update them manually).

<br />

### Features

- **PWA Support**: Includes all the necessary settings for the site to work in PWA mode
- **Custom Install Button**: The user can easily install the application on his device;
- **Custom Install Button - Notifications**: Supports notifications for different types of browsers;
- **Offline Notifications**: Supports offline notifications about internet disconnection;
- **Optimized Site Icon**: Using a minimum number of icons for all browsers and devices;
- **Optimized Splash Screensavers for Apple**: Optimization and automation of splash screens that are created automatically.

<br />

### Installation

#### 1. Create manifest.webmanifest

Use `manifest.webmanifest` in the `public` folder with the specified settings.

#### 2. Project favicon

Create favicons that are specified in `manifest.webmanifest` and `index.html`

<br />

### PWA works

As a result of recent updates from Google, PWA works correctly only when using hosting and a configured SSL certificate on the domain name.

<br />

### Contribution

If you have suggestions or found errors, please create an issue or open a pull request.

<br /><br /><br />

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
