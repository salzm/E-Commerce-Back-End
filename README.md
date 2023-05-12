# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description

To build the back end for an e-commerce site by modifying starter code. We use working Express.js API to use Sequelize to interact with a MySQL database. We need to use the application Insomnia to make sure the client side is talking to the backend of the database to make sure POST, GET, DELETE, etc works.

## Usage

For this task, we needed to first in the folders review what is what and see if all of the npm packages work. I looked at the json file to make sure I had everything. From there, I went into the server.js file and added a "sequelize.sync" before the PORT code to make sure that the code works and our server works. From there, I went in and went into the models folder and added columns to the Category, Product, Tag, and Product Tag to ensure our database has information to be created. From there, I went into the terminal, ran mysql to create the database, and then tried to run npm run seed, and for some reason it is saying that I am getting an error in sequlize. I need to figure out how to get the index.js file in the seed folder to make sure the ddb is made. From there, once I can get the seed index.js file to run and download it's contents in the ddb, I can then double check the pathing to ensure that the code runs. From there, I will open insomnia and go to the url to test is the client input get's into the backend. Thank you.

Source / Credits :

Website URL!!
Work in Progress!
