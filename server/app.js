const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
