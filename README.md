# Data Consumption Journey using graphQL (Proof Of Concept)

### Setting up the database
  
We have provided a docker compose file that starts two container:  
  
- `mongo`: A database server that will handle all read and write operations.  
- `mongo-express`: A web-based MongoDB client that interacts with our database.  

- We need to install a library to interact with the database from the Node.js application. 
  
`npm install mongoose`  
  
- We’ll also install the Pino library, which allows us to output more readable and professional-looking logs. 
  
`npm install pino pino-pretty`  
  
- In order to get data for the application, we will be required to the seed our database using a library.  
  
`npm install -g mongo-seeding-cli`  
  
- To seed your database, run `npm run db:seed` 
  
You can view the script in `package.json` where we have two defined scripts that we can use to start and seed our database.  
  
- To run the database, run `docker-compose up`  
- You can access the database from `http://localhost:8081/`
  
### Installing other dependencies

- Install apollo-server : `npm install apollo-server`  
- Install nodemon tool : `npm install --save-dev nodemon`
  
### Running the application

- To start the graphQL server, run the command : `npm start`
- The application can be accessed on `https://localhost:4000/`
