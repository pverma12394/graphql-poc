# Data Consumption Journey using graphQL (Proof Of Concept)

### Setting up the database
  
We have provided a docker compose file that starts two container:  
  
- `mongo`: A database server that will handle all read and write operations.  
- `mongo-express`: A web-based MongoDB client that interacts with our database.  
  
- To seed your database, run `npm run db:seed` 
  
You can view the script in `package.json` where we have two defined scripts that we can use to start and seed our database.  
  
- To install/run the database, run `npm run db:up`  
- You can access the database from `http://localhost:8081/`  
  
### Running the application

- To install local dependencies, run the command : `npm install` (This has to be done during the initial setup)  
- To start the graphQL server, run the command : `npm start`
- The application can be accessed on `https://localhost:4000/`


## Generating the data for the application

Currently, an example dataset is stored in a local directory : `/data/gene/gene_expression.js`  
The seeding command will refer to the data stored here to populate the mongoDB database.  

NOTE : Since graphQL is database agnostic, you can choose any storage solution in the backend. We have used MongoDB for this POC as it fulfils our use case.  

