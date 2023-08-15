
### Microservices-app : build with /Graphql/Js/Express

[Note: you should be familiar with graphql,express and docker basic to run this project]

If you want to learn how to set up a microservice-app using `Docker`, you're at the right place

Steps to run this project:

### `cd in auth-service` and run :

1. Run `npm i` command


### `cd in post-service` and run :

1. Run `npm i` command

### Run your app in Docker

1. Move to the root of app, then 
2. Run `docker-compose  up -d --build` command


we had setup an nginx-server in folder : `ngnix-config`; that we use ase reverse-proxy to forward client request to auth and post service. Once you haved finished `docker-compose  up -d --build` command open your browser and type:

- http://localhost:3000/post/graphql: to access to post-service graphql-server 


`query ExampleQuery {
  books {
    title
  }
}`

you will see this 


`{
  "data": {
    "books": [
      {
        "title": "The auth"
      },
      {
        "title": "auth"
      }
    ]
  }
}`



- http://localhost:3000/auth/graphql: to access to auth-service graphql-server 


