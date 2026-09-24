# Getting Started with Create React App

## Import Projects Into Firestore

1. Create a Firebase Web app and enable Firestore Database in the Firebase console.
2. Copy `.env.example` to `.env` and replace each value with the Firebase config from Project settings.
3. Start the app with `npm start`.
4. Open `http://localhost:3000/setup/projects` and select **Import projects**.

The importer writes all records from `src/data/projects.js` to the `projects` collection. Existing document IDs are preserved, so running the importer again updates those records instead of creating duplicates. The Firebase web configuration is safe to include in the client. Deploy the Firebase rules before using the dashboard.

## Manage Website Content

The protected content dashboard is available at `/manage`. It lets an authenticated manager add, edit, and delete projects, team members, and social links, and update the company statistics used by the public site.

1. In Firebase Console, enable **Authentication > Sign-in method > Google** or **Email/Password**.
2. In **Authentication > Users**, create an account for each person who should manage content.
3. Add the Firebase web configuration to `.env` using the `REACT_APP_FIREBASE_*` variables already used by the app.
4. Open `/manage` on the hosted site and sign in with the Firebase account.

Images are currently stored as image URLs so existing files under `public/assets` and external image URLs can both be used. Firebase Storage upload can be added later without changing the Firestore document shapes.

## Deploy With Firebase Hosting

Install the Firebase CLI and authenticate once:

```text
npm install -g firebase-tools
firebase login
```

Build and deploy from the project directory. Replace `your-firebase-project-id` with the Firebase project that owns the web app configuration:

```text
firebase use your-firebase-project-id
npm run build
firebase deploy --only hosting,firestore
```

The included `firebase.json` rewrites client-side routes such as `/manage` to the React entry point. The included `firestore.rules` keeps the site publicly readable while requiring Firebase Authentication for project writes. Storage uploads also require authentication.

## Connect a Custom Domain and SEO

1. Buy the preferred `.com` domain and add it in Netlify under **Domain management > Add custom domain**.
2. At the domain registrar, use the DNS records Netlify provides. Enable HTTPS in Netlify and choose one canonical version, usually `https://your-domain.com` without `www`.
3. Copy `.env.example` to `.env` and set `REACT_APP_SITE_URL` to that canonical URL. Add the same variable in Netlify under **Site configuration > Environment variables**, then redeploy.
4. Update the domain in `public/robots.txt` and `public/sitemap.xml` after the final domain is known, then submit `https://your-domain.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

The app generates page-specific titles, descriptions, canonical URLs, social metadata, and `ConstructionBusiness` structured data from `REACT_APP_SITE_URL`.

## Contact Form EmailJS Setup

1. Create an EmailJS service and email template at [emailjs.com](https://www.emailjs.com/).
2. Copy `.env.example` to `.env` if you have not already done so.
3. Set `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, and `REACT_APP_EMAILJS_PUBLIC_KEY` using the values from EmailJS.
4. Configure the template variables as `name`, `email`, `phone`, `serviceType`, and `message`.
5. Restart `npm start` after changing `.env`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
