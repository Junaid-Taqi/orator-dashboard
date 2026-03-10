# Getting Started with Create React App

> 🧱 **Bootstrap added** and project reorganized into a component-based structure.
> 
> - Bootstrap CSS imported in `src/index.js`.
- Bootstrap Icons added and imported.
- Component folder contains Header, Footer, Dashboard and several subcomponents (StatsCard, ActivityList, DisplayStatus, ChartCard).
- Dashboard layout mimics the provided screenshot using custom CSS for colors and transparency.


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

---

## Language support (Croatian/English)

The dashboard now includes a very light‑weight internationalisation layer.

- Translated strings live in `src/Services/Localization/Localization.js`.
- Language strings now live in two JSON files (`src/Services/Localization/hr.json`
  and `en.json`). the file names are descriptive and make it easy to add
  more languages later; the provider simply imports them and looks them up by
  code.
- The currently selected language is stored in `sessionStorage` under
  `appLang` (default is Croatian, `"hr"`).
- A dropdown selector has been added to the header allowing users to switch
  languages on the fly; it uses `setLanguage()` from the localization
  context.
- Components consume the helper `useTranslation()` (or `useLanguage()`) and
  render `t('someKey')` instead of hard‑coding text.
- Changing the value in `sessionStorage` will automatically update the UI
  (the code listens for the `storage` event); you can still switch languages
  via the console if desired:
  ```js
  sessionStorage.setItem('appLang','en'); // or 'hr'
  window.location.reload();
  ```

No layout or behaviour has been altered – only the visible strings are
translated.

