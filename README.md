# backend
# Setting up our Project
npm init
## Install the following packages by running these commands.
insnpm install express mongoose bcrypt

## Below is the project structure for this project.
📦projet
┣ 📂config
┃ ┣ 📜connect.js
┣ 📂models
┃ ┗ 📜challenge.js
┃ ┗ 📜comment.js
┃ ┗ 📜solution.js
┃ ┗ 📜user.js
┣ 📂routes
┃ ┣ 📜challenges.js
┃ ┗ 📜auth.js
┣ 📂node_modules
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜README.md
┗ 📜server.js

## Setting up our Express Server
At this point, our application set. Now let’s go ahead and set up our express server. To get started, first create server*.js file* in the project root directory.

const express = require('express');
const app = express();
const PORT = 3000;
