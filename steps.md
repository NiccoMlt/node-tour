# Creation process #

## Step 1: project generation ##

Command: 
```bash
express --no-view --css
```

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

A new ```.eslintrc.yml``` file appeared in the root of the project.

Because I love no-semicolon style, currently I extend StandardJS rules.

## Step 3: Babel & TypeScript ##

To improve experience with the JavaScript world, I add TypeScript and ES8 support.

### Step 3.1: TypeScript ###

With the help of official [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html),
I change a little the structure of the backend module:

```
backend
├───public
│   ├───images
│   ├───javascripts
│   └───stylesheets
│       └───style.css
└───src
    ├───routes
    │   ├───index.ts
    │   └───users.ts
    └───app.ts
```

Then, I install TypeScript as development dependency and create a ```tsconfig.json``` file with the following configurations:

- ```include``` files from ```backend/src``` folder;
- ```outDir```: output transpiled files to ```backend/built``` folder;
- ```allowJs```: accept JavaScript files as input;
- ```target``` ES5 compilation.
