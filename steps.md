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
│   └───index.js
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

