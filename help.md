## AWS CLI DynamoDB Helper Commands

# npm run serve
This will serve a localhost server for your DynamoDB

# npm run table:list 
This will list all tables in dynamodb localhost

# npm run table:drop 
This will delete a table from dynamodb localhost that is specified from a param 

example usage ==============
TABLE=your_table_name npm run table:drop 

# npm run table:create 
This will create a table from a JSON input and it takes a param of a file path

example usage ==============
FILEPATH=file:///home/carlomigueldy/fligno/dynafligmodb/tables/users_table.json npm run table:create
