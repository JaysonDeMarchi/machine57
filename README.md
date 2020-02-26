# Machine 57
A Chrome Extension to improve Machine 56

## Getting Started

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

## Scripts

|command|notes|
|-|-|
|`yarn dev` | run `webpack` in `watch` mode |
|`yarn storybook` | runs the Storybook server |
|`yarn build` | builds the production-ready unpacked extension |
|`yarn test -u` | runs Jest + updates test snapshots |
|`yarn lint` | runs EsLint |
|`yarn prettify` | runs Prettier |

## Loading the extension in Google Chrome

1. Run `yarn build`
2. Open [Google Chrome](https://www.google.com/chrome/).
3. Go to [chrome://extensions](chrome://extensions).
4. Enable `Developer Mode`.
5. Click `Load unpacked`.
6. Select this repository's `dist` directory.

## Built with

-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org/)
-   [Jest](https://jestjs.io)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [Bootstrap](https://getbootstrap.com)
-   [SCSS](https://sass-lang.com/)
-   [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts)
