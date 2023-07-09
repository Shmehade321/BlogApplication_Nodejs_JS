const express = require("express");
const { v4: uuid4 } = require("uuid");
const Post = require("./models/posts");
const postObject = new Post();

const app = express();

// Middleware
// Allow to access json body data from request
app.use(express.json());

/**
 * All Post API endpoint
 * http://localhost:4000/api/posts
 */
app.get("/api/posts", (req, res) => {
  res.status(200).json(postObject.get());
});

/**
 * Adding a new post API
 * http://localhost:4000/api/post
 */
app.post("/api/post", (req, res) => {
  const newPost = {
    id: uuid4(),
    title: req.body.title,
    content: req.body.content,
    date_created: new Date().toString(),
  };
  postObject.add(newPost);
  res.status(201).send({ message: "Post successfully created", post: newPost });
});

app.listen(4000, () => console.log("API listening on http://localhost:4000"));
