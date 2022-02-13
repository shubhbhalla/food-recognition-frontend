# Food-recognition-application

## This is the front end of the food recognition application made by [Shubh Bhalla](https://www.linkedin.com/in/shubh-bhalla-b86693a7/)

After cloning this project run

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Made a dynamic food recognition website with HTML5, CSS3 and JavaScript (React.js) at the front end, and NodeJS and ExpressJS as the custom-server RESTfulAPI. 
The web application takes an image URL from a user as input and tells the user which food items are in the image and stores the number of food items scanned to the user’s account in a PostgreSQL database. 
Different endpoints of the custom server RESTful API were thoroughly tested using a Postman collaboration platform. The custom-made server and the database architecture were connected using Knex.js SQL query builder. 
The application was made secure by adding additional layers to the security, such as hashing the user passwords before storing them and using database transactions when adding data to different tables in the same function. 
API calls were made from the backend NodeJS infrastructure to Clarifai machine learning API to get the food items in the image input by the user. 
The application was deployed using Heroku CLI and git version control.

After cloning this app you can work with the custom RESTful API built by me to change the user profile as you please. This feature has been kept because this was a fun personal project and I wanted other people to play around with my server!

<img width="1440" alt="Screen Shot 2022-02-13 at 10 43 43 AM" src="https://user-images.githubusercontent.com/67706402/153769846-05095ddc-5ecc-44fc-afdc-636340332c35.png">

https://user-images.githubusercontent.com/67706402/153769911-2dc87d9d-809a-4c56-afab-1374b8033e72.mov
