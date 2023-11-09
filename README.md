# Data Consumption Journey using graphQL (Proof Of Concept)

### Setting up the database
  
We have provided a docker compose file that starts two container:  
  
- `mongo`: A database server that will handle all read and write operations.  
- `mongo-express`: A web-based MongoDB client that interacts with our database.  
  
- To seed your database, run `npm run db:seed` 
  
You can view the script in `package.json` where we have two defined scripts that we can use to start and seed our database.  
  
- To run the database, run `docker-compose up`  
- You can access the database from `http://localhost:8081/`  
  
### Running the application

- To install local dependencies, run the command : `npm install`
- To start the graphQL server, run the command : `npm start`
- The application can be accessed on `https://localhost:4000/`
