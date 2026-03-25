# MotorMind - Quiz Site for Car Enthusiasts

MotorMind is an interactive full stack application built with **React** for the frontend and a **Sequelize ORM** backend. This application offers user authenticated access to a range of quizzes designed to test your knowledge of cars, over different categories and difficulties.


## Installation

Follow these steps to run MotorMind locally:

### Clone the Repository
```sh
git clone https://github.com/Eve-LynBremner/Quiz_Site_for_Car_Enthusiasts.git
cd <project-folder>
```

### Create the Database
Open a terminal and enter MySQL:
```sh
mysql -u root -p
```

Enter your MySQL password when prompted, then create the database by running:
```sh
source db/schema.sql;
quit;
```

### Install Dependencies
Run the following command in the root directory to install dependencies for both server and client:
```sh
npm install
```

### Set up Environment Variables
copy .env.example files in the client and server folders, to cerate .env files. In the server .env file, change your MySQL password

### Seed the Database
Populate the database with sample data. Run the following command in the server directory:
```sh
npm run seed
```

### Start the Application
Run the following command in the root directory to start the development server:
```sh
npm run dev
```

The application should now be running locally.

## Usage

- Open your browser and navigate to `http://localhost:5173` to access the MotorMind quiz site.
- Explore the features:
    - Sign up
    - Login
    - Try out different quizzes by category and difficulty
    - View the leaderboard
    - Logout

## License

This project is licensed under the **MIT License**.

## Authors

Emmanuel Olanloye
Alan Thomas
Eve-Lyn Bremner

## Contact

https://github.com/Phymmo20
https://github.com/alanthoms
https://github.com/Eve-LynBremner