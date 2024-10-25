const express = require('express');
const app = express();
const port = 4000;

// '/' -> localhost
// req = request, res = response
app.get('/', (req, res) => {
    res.send('Hello World :]');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//always must be at the bottom in JS 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

