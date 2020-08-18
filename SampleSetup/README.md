## Overview of the directory structure

```bash
.
├── css
│   └── styles.css
├── package.json
├── public
│   └── index.html
├── src
│   ├── index.js
│   ├── other_files_js
│   └── other_files_jsx
└── webpack.config.js

```

Downloading this `SampleSetup/` won't run on your local system. If you follow the steps mentioned in the reference URLs, you will get a similar output as shown above.

In addition to `src/`, `public/`, and `css/` there will be an additional `node_modules/`. \
You can choose either `npm install` or `yarn install` to create `node_modules`.

Refer this article https://www.sitepoint.com/yarn-vs-npm/ to know more about yarn (yarn.lock) and npm (package.lock.json). And whatever package manager you choose, don't forget to push the *lock* file.
