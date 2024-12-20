const express = require('express');
const app = express();
const cors = require('cors')
const todos = require('./database')


app.use(cors({origin: "*"}))


app.get('/api/data', (req, res) => {
    res.status(200).json({status: 'success', message: "todos get successfully", todos: todos})
});

app.listen(5000, () => {
    console.log("server running...");
});
