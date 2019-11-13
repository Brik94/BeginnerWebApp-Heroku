# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Prerequisites

Make sure you have [Node.js](http://nodejs.org/), [Heroku CLI](https://cli.heroku.com/), and [Git](https://git-scm.com/downloads) installed.
To verify you've installed these, run the following on the command line. If installed the version number will appear:

```sh
$ node --version
$ npm --version
$ git --version
```

## Running Locally

```sh
$ git clone https://github.com/Brik94/BeginnerWebApp-Heroku.git # or clone your own fork
$ cd BeginnerWebApp-Heroku # to navigate to the correct folder
$ npm install # to download dependencies
$ npm start # to run your app locally
$ Ctrl + C to quit
```

Your app should now be running on [http://localhost:5000](http://localhost:5000/).
Note: Instructions for configuring your database locally will be described further down.

## Deploying to Heroku

```
$ heroku login # the browser should open a Heroku login page
$ heroku create # heroku will generate a random name to be used in your app url
$ git push heroku master # deploys your heroku application
$ heroku open # a shortcut to open the site
)
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Deploying NEW Changes to Heroku

After adding more changes to your heroku application that have been developed locally, you can re-deploy these changes to your Heroku web application online.

```
$ git add . # adds all modified files to your local git repository
$ git commit -m "Example message" # enter a short message here describing your changes
$ git push heroku master
$ heroku open
```

You should see your changes!

## PostgreSQL & Heroku

[How to Provision a PostgreSQL Database for heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#provision-a-database)
Much of the code mentioned should already exist, but this is a great short tutorial to explain how to create & interact with your remote database.

## Documentation
