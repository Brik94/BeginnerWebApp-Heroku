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

## PostgreSQL Cloud Database

[How to Provision a PostgreSQL Database for Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#provision-a-database)

This is a great short tutorial that explains how to create & interact with your remote database. (Much of the code mentioned should already exist, but you will need to run the psql commands to create your database.)
After your database is created, you can find it located here: https://data.heroku.com/

Note: After installing postgres locally you may have to update your PATH environment variable so that commands like `heroku pg:sql` work correctly.

- Find the directory of your Postgres installation (The directory will be similar to this: `C:\Program Files\PostgreSQL\<VERSION>\bin`)
- Navigate to Control Panel > System and Security > System
- Follow the steps in the image below and paste in your postgres directory as your system environment variable.
  https://imgur.com/a/rGxlBtG

## PostgreSQL Local Database

Heroku has built in commands that let you clone your cloud database onto your local environment.

```sh
$ heroku pg:pull DATABASE_URL mylocaldb --app calm-fjord-05457 #pulls from your cloud database into a new database named mylocaldb from an app named calm-fjord-05457.
$ heroku pg:push mylocaldb DATABASE_URL --app calm-fjord-05457 #pushes database mylocaldb back into the cloud.
```

Note: When pushing the remote database must be empty. You will be prompted to pg:reset a remote database that is not empty. Read more detailed instructions here:
[Keeping your local and cloud databases in sync with eachother](https://devcenter.heroku.com/articles/heroku-postgresql#pg-push-and-pg-pull)

The benefit of developing with a local database is that you can make use of pgAdmin4, a GUI for interacting with PostgreSQL databases.
TODO: Create a PGAdmin guide.
