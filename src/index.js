const express = require("express");

const app = express();

app.get("/", (_, res) => res.send("hello"));

app.get("/hello2", (_, res) => res.send("hello2"));

app.get("/hello3", (_, res) => res.send("hello3"));

app.get("/hello4", (_, res) => res.send("hello4"));

app.get("/hello5", (_, res) => res.send("hello5"));

app.get("/hello6", (_, res) => res.send("hello6"));
