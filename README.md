# PWA-ON-NEXTJS-TEMPLATE

This project is a template with a configured PWA (Progressive Web App) mode of the site. It includes a customizable installation button support for various notifications for all types of browsers. It also displays a notification about disconnecting the Internet connection.

Optimized favicon of the site, using a minimum number of files. To create such icons, you can use [Figma templates](https://www.figma.com/community/file/1380577671249157222/website-icon-adaptation).

For Apple devices, a splash screen has been created, which in turn is optimized for all screen sizes. And this splash is created automatically (you will not need to constantly update them manually).

<br />

### Features

- **PWA support**: Includes all the necessary settings for the site to work in PWA mode
- **Custom install button**: The user can easily install the application on their device;
- **Custom install button - notifications**: Supports notifications for different types of browsers;
- **Offline notification**: Supports offline notifications about internet disconnection;
- **PWA screenshots**: PWA installation screenshots for Android devices;
- **Optimized site favicon**: Using a minimum number of icons for all browsers and devices;
- **Optimized splash screens for Apple**: Optimization and automation of splash screens that are created automatically.

<br />

### Installation

#### 1. Installing the next-pwa library

Install the next-pwa library using instructions from the official [library documentation](https://www.npmjs.com/package/next-pwa)

```bash
npm install next-pwa
```

#### 2. Configuration next.config.js

Customize the code in the `next.config.js` file to suit your projects.

#### 3. Creating manifest.json

Use `manifest.webmanifest` in the `public` folder with the specified settings.

#### 4. Service worker

The `service-worker.js` file in the `public` folder is created automatically by the next-pwa library when you run or build a project with your own code.

<br />

### PWA work

As a result of the latest updates from Google, PWA works correctly only when using hosting and a configured SSL certificate on the domain name.

<br />

### Contribution

If you have suggestions or find bugs, please create an issue or open a pull request.

<br /><br /><br />

# NextJs Starting

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<br />

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

<br />

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
