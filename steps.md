# Creation process #

## Step 1: project generation ##

Command: ```express --no-view --css```

Folder structure:
```
├───bin
│   └───www
├───node_modules
├───public
│   ├───images
│   ├───javascripts
│   └───stylesheets
│       └───style.css
├───routes
│   ├───index.js
│   └───users.js
├───.gitignore
├───app.js
├───package.json
└───package-lock.json
```

You should serve it with ```npm start``` which calls ```node ./bin/www``` from ```package.json``` file.

Current dependencies:

- ```cookie-parser```
- ```debug```
- ```express```
- ```morgan```

### Step 1.1: folder structure refactor ###

As suggested in many _best practice collections_, structure repo in two main blocks: backend and frontend.

New folder structure:
```
├───bin
├───backend
│   ├───public
│   │   ├───images
│   │   ├───javascripts
│   │   └───stylesheets
│   │       └───style.css
│   ├───routes
│   │   ├───index.js
│   │   └───users.js
│   └───app.js
├───frontend
├───node_modules
├───package.json
└───package-lock.json
```

## Step 2: ESLint ##

Following official [getting started](https://eslint.org/docs/user-guide/getting-started), add ESLint to the project.

Because I love no semicolon style, currently I extend StandardJS rules.
