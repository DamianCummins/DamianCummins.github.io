# Damian Cummins Personal Website

https://damiancummins.github.io/

### Description
This React.js application provides links to projects, blogs and other professional information. 

#### Damian Assistant
The application includes a chatbot assistant that is backed by a Natural Language Multiclass Classifier running in the browser using TensorFlow.js. 

### Branches

#### dev
All implementation changes to be made in the `dev` branch. After committing and pushing changes to dev branch, run `npm run deploy` locally. This will create the build the public assets, create a new branch `gh-pages`, commit the public assets to this branch and push this branch to remote.

#### gh-pages
This branch is created when running `npm run deploy` locally and contains the public assets for this web app. After running `npm run deploy`, create a Pull Request to merge `gh-pages` into `master`.

#### master
The contents of this branch are served at https://damiancummins.github.io. Only `master` branch can be used for `User` accounts.
