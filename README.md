# Course Webpage with PWA Design
This is a project from CSCI4140 in CUHK. We hope to explore the possibility in progressive web apps. A simple course webpage is redesigned with PWA architecture. 

Slides: https://docs.google.com/presentation/d/1e2a78rGtXsk4epFLcBkSw0t4pOmqoSCiFQhVf0fg1dY/edit?usp=sharing
## Getting Started
This project is built with two tiers architecture. The frontend is built with ReactJS. The backend server is built with the Django with REST framework. There is a proxy server built with ExpressJS for the communication between client and backend server.
### Running locally
This will guide you how to host the whole application on your own localhost. A number of procedures are required; therefore, it is recommended to use the docker to set up the server.
#### Prerequisites
The application requires a number of dependencies in order to set up the fullstack framework. Before starting the building, please ensure you have the following command on your machine.
1. python3
2. pip3
3. npm
4. node
5. docker
#### Installing
This application need to set up the backend server, frontend server and the database respectively. 
##### Backend setting
The backend of this application first requires redis for broadcasting message to all clients. Please run the following command to launch the redis server at port 6379.
```bash
docker run --name some-redis -d redis
``` 
After setting up the redis server, please install the dependencies in python3 with pip3.
```bash
pip3 install -r ./backend/requirements.txt
```
Then, you can run the following command to launch the backend server.
```bash
python3 ./backend/manage.py runserver
```
The backend server can be accessed in http://localhost:8000.
##### Frontend setting
First, you need to use the node package manager to install the dependencies.
```bash
npm install
```
By default, the notification push service is built with the account from the contributors. You can customize the service with your own account in Google Firebase Cloud Messaging Service.
You can following [this link](https://firebase.google.com/docs/cloud-messaging/js/client) to get all the API keys. You have to set two API keys, sender ID and server key, into the application. You need to change the gcm_sender_id in [./public/manifest.json](,/public/manifest.json) with sender ID. The service key can be set in [./private/server.js](./private/server.js).

Next, you need to build the frontend application and launch the server with the following command. Please note that you need to set the environment variable NODE_ENV into 'development'.
```bash
npm run build-pwa
node ./private/server.js
```
Finally, you can get the application in http://localhost:8080. 

### Running with Docker (Recommended)
The building in the application with docker is much easier. Everything will set up for you after the deployment is completed. Please note that you can also integrate your own Firebase Service before launching the server.
#### Prerequisites
The following command is required for the local deployment.
1. docker
2. docker-compose or fig
#### 
After the environment is up, you can run the following command according to your choice in the environment.
```bash
sudo fig build
sudo fig up
```
or
```bash
sudo docker-compose build
sudo docker-compose up
```
Then, the frontend application is hosted in http://localhost:8080. You can access the database in http://localhost. 
## Built With
This application is built with the following libraries/frameworks.
* Frontend (NodeJS)
    * ReactJS
    * ExpressJS
    * Websocket
    * Web-push
    * Workbox
    * Axios
* Backend (Python3)
    * Django
    * Django REST framework
    * channels
    * channels_redis
* Database (SQL)
    * SQLite3
## Authors
* Siu Long Wa

Take a look at the list of [contributors](https://github.com/RyanSiu1995/Course_Webpage_PWA_Client/graphs/contributors) who participated in this project for details.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
