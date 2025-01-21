const express = require("express")
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid'); // For generating unique post IDs

const methodOverride = require("method-override"); // Allows PUT and DELETE methods in forms
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true })); // For parsing form data

app.set("view engine", "ejs"); // Set EJS as the templating engine
app.set("views", path.join(__dirname, "views")); // Set views folder path
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public folder

let posts = [ // Array with(preload) 3 info with unique IDs
    { id: uuidv4(), username: "SoumyadipKaran", content: "Hello i'm Soumyadip Karan" },
    { id: uuidv4(), username: "Sdkaran", content: "Hiiiiii!" },
    { id: uuidv4(), username: "sdk", content: "Byeeeee!" },
];

// Render all posts on the homepage
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Handle form submission to create a new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4(); // Generate a unique ID for the new post
    posts.push({ id, username, content }); // Add new post to the posts array
    res.redirect("/posts"); // Redirect to the posts page after adding
});

// Show the form for creating a new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Show details of a specific post based on the ID
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); // Find the post by ID
    if (post) {
        res.render("show.ejs", { post }); // Render the post details
    } else {
        res.status(404).send("Post not found"); // Handle post not found
    }
});

// Update post content using PATCH request
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content; // Get the new content from the form
    let post = posts.find((p) => id === p.id); // Find the post to update
    post.content = newContent; // Update the content of the post
    res.redirect("/posts"); // Redirect to posts page after update
});

// Show the form to edit an existing post
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); // Find the post to edit
    if (post) {
        res.render("edit.ejs", { post }); // Render the edit form
    } else {
        res.status(404).send("Post not found");
    }
});

// Delete a post based on its ID
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id); // Take the Array without the Id
    res.redirect("/posts"); // Redirect to posts page after deletion
});

// Start the Express server
app.listen(port, () => {
    console.log("Listening on port", port);
});
