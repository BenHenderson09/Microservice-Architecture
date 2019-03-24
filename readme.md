# Computer Shop Microservice Example
This project was created to simply show how a microservice architecture is constructed and how `docker-compose` can be used
to manage a group of containers.

## Project details
- Containers build with Docker
- Nginx reverse proxy used to serve static content and assign routes
- NodeJS containers run REST APIs and render EJS files
- MongoDB used as database (For persistent storage, mount a volume your filesystem)

## Usage
Containerized projects are very portable, therefore all that is required to get this project running is to
ensure Docker is installed on your machine, clone this repository and execute: `docker-compose up`. The command
will pull all the required images, start the containers and establish a Docker network.

## Routes
|URI|Method|Operation|
|---|------|---------|
|/|GET|Shows index page of project|
|/desktops|GET|Shows index page of desktops category|
|/api/desktops|GET|Sends JSON of all desktops|
|/api/desktops/:id|GET|Send JSON of specified desktop|
|/api/desktops|POST|Creates new desktop listing. Requires `name` and `price` in post body|
|/api/desktops/:id|PUT|Updates specified desktop listing. Requires `name` or `price` in post body|
|/laptops|GET|Shows index page of laptops category|
|/api/laptops|GET|Sends JSON of all laptops|
|/api/laptops/:id|GET|Send JSON of specified laptop|
|/api/laptops|POST|Creates new laptop listing. Requires `name` and `price` in post body|
|/api/laptops/:id|PUT|Updates specified laptop listing. Requires `name` or `price` in post body|
|/api/desktops/:id|DELETE|Deletes specified desktop listing|
|/api/laptops/:id|DELETE|Deletes specified laptop listing|

## Afterword
It is clearly visible that this relatively simple project has been made considerably more complex with a microservice
architecture.That is why, in my opinion, smaller projects are not suited to a microservice architecture due to the management
required. However, this is perfect for larger projects with many people working simultaneously on different sections
of the application because of how each container is isolated from other code, allowing each section to be developed
independently.