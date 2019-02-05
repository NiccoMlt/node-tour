# Creation process

## Step 1: project generation

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

You should serve it with `npm start` which calls `node ./bin/www` from `package.json` file.

Current dependencies:

-   `cookie-parser`
-   `debug`
-   `express`
-   `morgan`

### Step 1.1: folder structure refactor

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

## Step 2: ESLint

Following official [getting started](https://eslint.org/docs/user-guide/getting-started), add ESLint to the project.

A new `.eslintrc.yml` file appeared in the root of the project.

Because I love no-semicolon style, currently I extend StandardJS rules.

## Step 3: Babel & TypeScript

To improve experience with the JavaScript world, I add TypeScript and ES8 support.

### Step 3.1: TypeScript

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

Then, I install TypeScript as development dependency and create a `tsconfig.json` file with the following configurations:

-   `include` files from `backend/src` folder;
-   `outDir`: output transpiled files to `backend/built` folder;
-   `allowJs`: accept JavaScript files as input;
-   `target` ES5 compilation.

### Step 3.2: TSLint

To ensure code quality, I add also TSLint to the project:
following official [CLI guide](https://palantir.github.io/tslint/usage/cli/), I installed it as development dependency
and initialized it with `tslint --init`; then, I converted JSON file to YAML.

I also added compatibility with ESLint rules and, as ESLint, extend StandardJS rules; currently, I chose `tslint-config-standard-plus`.

### Step 3.3: Babel

Following official [setup guide](https://babeljs.io/setup#installation) , I installed Babel Core & CLI locally
and configured `build` script inside `package.json`.

### Step 3.4: TypeScript-Babel integration

Following these [two](https://iamturns.com/typescript-babel/) [tutorials](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/),
I configured Babel to be used to compile the project.

Firstly:

```bash
npm install --save-dev @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread
```

Then i configured `.babelrc` and `tsconfig.json` accordingly to tutorials.

## Step 4: Prettier

I firstly started following [official getting started](http://engineering.monsanto.com/2018/09/26/using-prettier/);
with `npm install --save-dev --save-exact prettier` I installed Prettier tracking the specific version as suggested.

### Step 4.1: Pre-commit Hook with Husky

Following both [official documentation](https://prettier.io/docs/en/precommit.html) and [Monsanto blog post](http://engineering.monsanto.com/2018/09/26/using-prettier/),
I added pre-commit hooks in `.huskyrc.yml` file which execute `pretty-quick` on stage files before commit.

## Step 5: Angular

Import Angular Tour of Heroes app from my other repo: [https://github.com/NiccoMlt/Angular-Tour-of-Heroes](https://github.com/NiccoMlt/Angular-Tour-of-Heroes) and serve it.

## Step 6: Yarn

Following official [migration guide](https://yarnpkg.com/en/docs/migrating-from-npm), I migrate dependency management from NPM to Yarn.

Now, to configure repo, the commands should be:

```bash
yarn install

cd frontend

yarn install
```

### Step 6.1: Yarn Workspaces

The migration to Yarn was done mostly for the Workspaces feature learned reading [their blog post](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/).

Following [official documentation](https://yarnpkg.com/lang/en/docs/workspaces/), I did these steps:

- Move current root ```package.json``` file (which was actually related to the backend server) in ```/backend``` folder.
- Move ```/bin``` folder inside backend.
- Create new ```/packages``` folder and move frontend and backend there.
- Create a root ```package.json``` file with all folders in ```/packages``` folder as workspaces.
- Declare ```nohoist``` for angular packages to ensure compatibility (see [here](https://github.com/angular/angular-cli/issues/7097)).

New folder structure:

```
└───packages
    ├───backend
    │   ├───bin
    │   │   └───www
    │   ├───public
    │   │   ├───images
    │   │   ├───javascripts
    │   │   └───stylesheets
    │   │       └───style.css
    │   ├───src
    │   │   ├───routes
    │   │   │   ├───index.ts
    │   │   │   └───users.ts
    │   │   └───app.ts
    │   ├───.babelrc
    │   ├───.eslintrc.yml
    │   ├───.huskyrc.yml
    │   ├───.prettierrc.yml
    │   ├───package.json
    │   ├───tsconfig.json
    │   └───tslint.yaml
    ├───frontend
    │   ├───e2e
    │   │   ├───src
    │   │   │   ├───app.e2e-spec.ts
    │   │   │   └───app.po.ts
    │   │   └───tsconfig.e2e.json
    │   ├───src
    │   │   ├───app
    │   │   ├───assets
    │   │   └───environments
    │   ├───.sass-lint.yml
    │   ├───angular.json
    │   ├───package.json
    │   ├───tsconfig.json
    │   └───tslint.yaml
    ├───.editorconfig
    ├───.eslintignore
    ├───.gitignore
    ├───package.json
    └───yarn.lock
```
