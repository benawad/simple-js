const express = require("express");

const app = express();

app.get("/", (_, res) => res.send("hello"));

app.get("/hello2", (_, res) => res.send("hello2"));
