# STEP BY STEP GUIDE TO NEXTJS

1. cd into an empty directory
2. `npm init -y` - it will create a package.json
3. `npm install react react-dom next` - it will install the boiler plate packages we need (check the node_modules)
4. head to the [package.json](./package.json) and add the following scripts, we will need them:

   ```js
   "scripts": {
   "dev": "next",
   "build":"next build",
   "start": "next start"
   }
   ```

add this in our package.json

## routes in Next.js

next js has file based routing built into it. this means that any javascript file put into a pages directory will be executed when a user of your profile visits the site followed by the name of that javascript file.

for `index.js` or `index.jsx` is run though when the user visits the root of your website.
