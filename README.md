# MyGrade Feedback System

A full-stack progressive web application which lets students and lecturers handle assignments and feedback.

## Getting Started

Below are the instructions to get the application running on your machine. 

### Prerequisites

This application will require a variety of tools to run. 

1. Amazon Web Services (Free Tier)
2. MySQL Workbench
3. Visual Studio Code (or equivalent)

### Setting Up AWS Secure Simple Storage (S3)

AWS S3 is used to store the files both students and lecturers upload. 

For detailed instruction in how to create a AWS S3 bucket, follow this link (Remeber you can call the bucket anything you would like).

* [AWS Documentation - Create S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html)

### Setting Up MySQL Database

To run the application a instance of MySQL server will be required. It is recommended to use AWS RDS free tier to create the database. MySQL Workbench will be used to access this database and create the tables for storing data.

The following link provides details on how to create an AWS RDS MySQL database. Again, the name of the database is up to you.

* [AWS Documentation - Create AWS RDS MySQL Database](https://aws.amazon.com/getting-started/hands-on/create-mysql-db/)

The next steps are about connecting to and creating a database. 

1. Open MySQL Workbench. 
2. Click on new connection.
3. Enter the unique database link found on the database instance on AWS RDS. Enter the username and password you created during setup of the database.
3. To create a database type in the following (you can use any name you want.): ```CREATE DATABASE MyGradeDB``` or if you created a database during setup skip to step 4.
4. Execute the following command to select the database to be used: ```USE MyGradeDB```, or use the name of the database if you made one during setup of AWS RDS.
5. In the files there is a file titled "DbCodeForeignKeys.sql", open this and copy the contents into MySQL Workbench and run the code. This will create the tables for storing application data.

The database which will be used for the application will now have been created.

### Creating .env File

To store all the necessary access keys and data for the application needs a .env file. 

1. Create a new file in the root folder called ".env".
2. In the .env file, add the following data:

```
HOST= // The host - typically localhost or if using AWS SQL database it will have a connection link.
USER= // Database username.
PASSWORD= // Database user password.
DATABASE= // The name of the database being connected to.
SECRETKEY= // Anything you want goes here. 
AWSACCESSKEY= // Access keys from AWS.
AWSSECRETACCESSKEY= // Access keys from AWS.
BUCKETNAME= // The name of the S3 bucket created on AWS.
```

### Running the Application

Below is a step-by-step guide on how to run the application on your machine. 

1. Using a console, go to the root "MyGrade" folder (uncompressed) and install the node packages with the following command: ```npm install```
2. Navigate to the client folder using the following command: ``` cd client``` and install the node packages for this using the following command: ``` npm install```. 
3. Create a build of the client application by running ```npm run-script build```.
4. Finally return to the root folder via the following: ``` cd ..```
5. From the root folder run the following command to run the application: ```npm start```
6. Go to a browser (Chrome recommended) and type into the URL "localhost:5000".
7. The web application should now be running and you should now be able to register and login.

NOTE - Some packages may be outdated and can be updated via ```npm update ``` command, however this may result in breakage.

## Built With

* [MySQL Installer](https://dev.mysql.com/downloads/installer/) - Downloads MySQL products to connect to AWS RDS instance.
* [Amazon Web Services](https://aws.amazon.com/) - Used for file storage, but could also be used for database hosting.
* [Visual Studio Code](https://code.visualstudio.com/) - Code Editor. 
* [Materialise CSS](https://materializecss.com/) - CSS framework used for creating the modern responsive web application design. 

## Authors

* **Thomas Scott** - *Developer* - [thomas-d-scott](https://github.com/thomas-d-scott)
