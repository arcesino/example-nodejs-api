example-node-js
===

Basic example HTTP API powered by [NodeJS](https://nodejs.org/) & [ExpressJS](https://expressjs.com/) using [PostgreSQL](https://www.postgresql.org) DB.

# Quick Start

This is a dockerized application so all you need to do is to [install Docker](https://docs.docker.com/get-docker/) for your OS. There's no need to install NodeJS or PostgreSQL to run this API.

To run the API, open a terminal and from inside the directory where you cloned this repo run the following:

For Linux & MacOS users:
```
make docker-run
```

For Windows:
```
docker-compose up
```

Commands above will create a couople Docker containers:

- db: the PostgreSQL server with a `products` table and some initial data. See [schema.sql](./db/schema.sql)
- api: the Products API listening on port 3000

To test the api you can open the following endpoints in your web browser:

- List Products: http://localhost:3000/products
- Get Product by Id: http://localhost:3000/products/1
