# Express Blog App

A simple Express.js application that allows users to create, read, edit, and delete posts. This app uses EJS as the templating engine and includes basic CRUD functionality for posts with unique IDs generated using `uuid`.

## Features

- View all posts.
- Create new posts.
- Edit and update existing posts.
- Delete posts.
- Simple form-based UI for interacting with posts.
- Unique post IDs using the `uuid` package.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **Express.js**: Web framework for building the app.
- **EJS**: Templating engine for rendering HTML pages.
- **uuid**: Library for generating unique IDs for posts.
- **method-override**: Middleware to allow the use of PUT and DELETE methods in forms.
- **HTML/CSS**: For the basic structure and styling of the pages.

## Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Soumyadipkaran/ejs-blog-crud.git
 
express-blog-app
├── public/            
├── views/       
│   ├── edit.ejs         
│   ├── index.ejs         
│   ├── new.ejs           
│   └── show.ejs           
├── app.js               
├── package.json            
└── README.md             

