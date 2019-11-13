# NodeJS & Heroku Beginner WebApp

A modified barebones Node.js app using [Express 4](http://expressjs.com/).
This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Prerequisites

Make sure you have [Node.js](http://nodejs.org/), [Heroku CLI](https://cli.heroku.com/), [Git](https://git-scm.com/downloads), and [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) installed.
To verify you've installed these, run the following on the command prompt. If installed the version number will appear:
```sh
$ node --version
$ npm --version
$ git --version
```

## Running the app Locally

To configure & run the web application locally open a command prompt and run the following commands.
Make sure you're in the directory where you'd like your project to exist.

```sh
$ git clone https://github.com/Brik94/BeginnerWebApp-Heroku.git # Will download a clone of this entire github repository
$ cd BeginnerWebApp-Heroku # to navigate to the correct folder
$ npm install # to download dependencies
$ npm start # to run your app locally
$ Ctrl + C # to stop the app
```

Your app should now be running on [http://localhost:5000](http://localhost:5000/).

Note: Instructions for configuring your database locally will be described further down.

## Deploying to Heroku (Running the app Online)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

or run the following commands.

```sh
$ heroku login # the browser should open a Heroku login page
$ heroku create # heroku will generate a random name to be used in your app url
$ git push heroku master # deploys your heroku application
$ heroku open # a shortcut to open the site
```

[You can re-name your app URL later](https://devcenter.heroku.com/articles/renaming-apps)

## Deploying NEW Changes to Heroku

After adding more changes to your heroku application that have been developed locally, you can re-deploy these changes to your Heroku web app.

```sh
$ git add . # adds all modified files to your local git repository
$ git commit -m "Example message" # enter a short message here describing your changes
$ git push heroku master
$ heroku open
```

You should see your changes!

## PostgreSQL Local Database
TODO


## PostgreSQL Cloud Database

[How to Provision a PostgreSQL Database for Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#provision-a-database)

Much of the code mentioned should already exist, but this is a great short tutorial to explain how to create & interact with your remote database.

Note: After installing postgres locally you may have to update your PATH environment variable so that commands like `heroku pg:sql` work correctly.
- Find the directory of your Postgres installation (The directory will be similar to this: `C:\Program Files\PostgreSQL\<VERSION>\bin`)
- Navigate to Control Panel > System and Security > System
- Follow the steps in the image below and paste in your postgres directory as your environment variable. 
https://i.imgur.com/NQWwDCC.png

