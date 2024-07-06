# PWA-ON-NEXTJS-TEMPLATE

This project is a template for setting up a PWA (Progressive Web App) site mode. It includes a custom install button and support for all types of alert responses for various types of browsers. And also display a notification about disconnecting the Internet connection. [Template icon Figma](https://www.figma.com/community/file/1380577671249157222/website-icon-adaptation)

<br />

### Features

- **PWA support**: Includes all the necessary settings for the PWA site to work.
- **Custom install button**: User can easily install the application on their device.
- **Custom install button - alerts**: Support for alerts for various types of browsers.
- **Offline alert**: Support offline notification about internet outage.

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

Use `manifest.json` in the `public` folder with the specified settings.

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<br />

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
