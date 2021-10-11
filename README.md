example-node-js
===

Basic example HTTP API powered by [NodeJS](https://nodejs.org/) & [ExpressJS](https://expressjs.com/) using [PostgreSQL](https://www.postgresql.org) DB.

# Quick Start

This is a dockerized application so all you need is to [install Docker](https://docs.docker.com/get-docker/) for your OS. There's no need to install NodeJS or PostgreSQL to run this API.

For Linux systems, you must also [install Docker Compose](https://docs.docker.com/compose/install/#install-compose-on-linux-systems). This is not needed for MacOS and Windows.

### 1) Get the code

This is a public repository that can be cloned using Git:
```
git clone https://github.com/arcesino/example-nodejs-api.git
```

If you have no experience with Git, you can also [download a ZIP](https://github.com/arcesino/example-nodejs-api/archive/refs/heads/main.zip) with the repo code.

### 2) Run the API

To run the API, open a terminal and from inside the directory where you cloned/downloaded the repo code run the following:

For Linux & MacOS users:
```
make docker-run
```

For Windows:
```
docker-compose up
```

Commands above will create a couple Docker containers:

- db: the PostgreSQL server with a `products` table and some initial data. See [schema.sql](./db/schema.sql)
- api: the Products API listening on port 3000

### 3) Test the API

To test the api, open the following endpoints in your web browser:

- List Products: http://localhost:3000/products
- Get Product by Id: http://localhost:3000/products/1

If everything is OK, you should see a JSON response with some products data.
