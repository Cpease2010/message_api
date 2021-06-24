# Message_API
This simple API will enables real-time communication between 2 or more clients on separate networks. While a client is included in the this repo, it is for testing purposes.

## Quick Start
1. Clone with repo to your environment.
1. Navigate to the project folder in your terminal
1. Run `npm i` to install dependencies
1. Run `node server.js` to start the server & connect to PostgreSQL
1. Run `npm lite-server` to start the client
1. `Lite-server` should automatically open the client UI, if it does not navigate to http://localhost:8080/. To test you can duplicate this window, this will give you the ability to pass messages back and forth as if you were 2 separate people.

## Technologies Used
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Socket.io](https://socket.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Lite-server](https://www.npmjs.com/package/lite-server) (For development and testing purposes only)

## Assumptions
- The tech stack was chosen based on techs already in use.
- [Websockets](https://www.educba.com/websocket-vs-rest/) were implemented over REST to allow for free flowing communication between the server and clients.
- Use of [PostgreSQL Pool](https://node-postgres.com/features/pooling) instead of client to support high frequency access of tables.
- Frontend design was not important as the requirements only spoke of the backend.

## Events
  - Message sent => client emits `message`, server broadcasts `new-message`
  - Member joins => client emits `member-joined`, server broadcasts `new-member`

## Acceptane Criteria
[x] A short text message can be sent from one user (the sender) to another
(the recipient).  
[ ] Recent messages can be requested for a recipient from a specific sender with a limit of 100 messages or all messages in last 30 days.  
[ ] Recent messages can be requested from all senders - with a limit of 100
messages or all messages in last 30 days.  
[x] Document your api like you would be presenting to a web team for use.  
[x] Show us how you would test your api.  
[x] Ensure we can start / invoke your api.  

## Stretch Goals
  - Parametize the socket port and client url
  - Paramatized connection to database
  - Implement .env file

