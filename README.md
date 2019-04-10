## Purpose
In order to stay somewhat pertinent to what we are doing, we would like you to setup a basic node.js REST API for a chat system. This API is purely a REST one, so no need to add Socket.IO or some other web socket library to make it realtime.

### Available Scripts
In the project directory, you can run:
#### `npm install` 
Installs dependencies. <br>

#### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
The page will reload if you make edits using `nodemon`.<br>

### Requirements
- Define basic in-memory (i.e. no need to use actual databases) data structures/formats for messages and conversations.
- Messages should be able to support text, basic attachments such as images, video etc (using url links so not actually storing the media files) and basic buttons.
- Conversations should simply reference the messages. I.e each message should be part of a conversation
- Via the REST API, we should be able to do all the CRUD operations against a /messages endpoint as well as against a /conversations endpoint.
- We should be able to use query parameters against the /messages endpoint to be able to retrieve messages from a certain conversation only.
 - Basic object validation should occur upon hitting the API.

 ### Notes
#### success 
 - Implementing a structure for messages and conversations using local JSON files.
 - Messages support text and basic attachments such as videos, images and emoji buttons. 
 - Conversations reference messages by an id and title.
 - CRUD operations are able to be performed on /messages and /conversations endpoints. i.e. messages and conversations can be created, read individually and all, updated and deleted.
 - Basic validation for /messages and /conversations endpoint when POST operation occurs. Title or text is required. Status messages are sent if successful and unsuccessful. 

 #### unsuccessful
 - Unable to use query parameters against the /messages endpoint to be able to retrieve messages from a certain conversation only. Not familiar with how to create referential integrity relationship with json data.



