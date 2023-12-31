# 18 NoSQL: Social Network API

## Task

To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria


GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list



## Acceptance Criteria

Server is already started and the Mongoose models are synced to the MongoDB database

Coded all above requirements using mongoose.


## Installtion

npm init -y

npm install express@4.17.1 mongoose@5.1.0 cors@2.8.5

npm install mongodb@5.1.0

npm install body-parser@1.20.2

node app.js

A video of this script in action can be viewed in following link

https://drive.google.com/file/d/1-UPwiPj4cFdu2CeOtbMbX05K3DHlNx49/view


